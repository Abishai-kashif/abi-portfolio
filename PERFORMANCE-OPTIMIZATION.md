# 🚀 Performance & SEO Optimization Guide

## Core Web Vitals Optimization

Your portfolio is already optimized, but here are additional tips:

### 1. Image Optimization

**Current Status:** ✅ Images set to `unoptimized: true` in next.config.mjs

**For Production:**
```javascript
// next.config.mjs
const nextConfig = {
  images: {
    unoptimized: false, // Enable optimization
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}
```

**Optimize existing images:**
```bash
# Install sharp for better image processing
npm install sharp

# Compress images
npx @squoosh/cli --webp auto public/**/*.{jpg,png}
```

---

### 2. Font Optimization

**Current Status:** ✅ Already optimized with `display: "fallback"`

Your fonts are well-configured:
- Montserrat: `display: "fallback"` ✅
- Lora: Should add `display: "swap"` ✅
- Hind Madurai: Should add `display: "swap"` ✅

**Recommended update:**
```typescript
// app/layout.tsx
export const lora = Lora({
  subsets: ["cyrillic-ext", "symbols"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
  display: "swap", // Add this
})

export const hindMadurai = Hind_Madurai({
  subsets: ["tamil", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind-madurai",
  display: "swap", // Add this
})
```

---

### 3. Code Splitting & Lazy Loading

**Implement for heavy components:**

```typescript
// Example: Lazy load particle effects
import dynamic from 'next/dynamic';

const Particles = dynamic(() => import('@/components/particles'), {
  ssr: false,
  loading: () => <div className="h-full w-full" />,
});

// Example: Lazy load sections below fold
const ShowcaseOfWorkSection = dynamic(
  () => import('@/components/sections/ShowcaseOfWorkSection'),
  { loading: () => <div className="min-h-screen" /> }
);
```

---

### 4. Reduce JavaScript Bundle Size

**Current dependencies to review:**

```bash
# Analyze bundle size
npm install -D @next/bundle-analyzer

# Add to next.config.mjs
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)

# Run analysis
ANALYZE=true npm run build
```

**Heavy packages to optimize:**
- `framer-motion` (12.23.12) - Consider lazy loading animations
- `@tsparticles/*` - Load only on hero section
- `react-icons` - Import specific icons, not entire library

**Better icon imports:**
```typescript
// ❌ Bad - imports entire library
import { FaGithub } from 'react-icons/fa';

// ✅ Good - imports only what's needed
import FaGithub from 'react-icons/fa/FaGithub';
```

---

### 5. Caching Strategy

**Add to next.config.mjs:**
```javascript
const nextConfig = {
  // ... existing config

  async headers() {
    return [
      {
        source: '/icons/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/projects/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
}
```

---

## Content SEO Optimization

### 1. Heading Structure

**Current:** Review your sections for proper heading hierarchy

**Best practices:**
```html
<!-- ✅ Good hierarchy -->
<h1>Main page title (only one per page)</h1>
  <h2>Major section</h2>
    <h3>Subsection</h3>
    <h3>Another subsection</h3>
  <h2>Another major section</h2>

<!-- ❌ Bad - skipping levels -->
<h1>Title</h1>
  <h3>Subsection</h3> <!-- Skipped h2 -->
```

**Audit your sections:**
```bash
# Check heading structure
grep -r "<h[1-6]" components/sections/
```

---

### 2. Alt Text for Images

**Add descriptive alt text to all images:**

```typescript
// ❌ Bad
<Image src="/projects/joker.png" alt="project" />

// ✅ Good
<Image
  src="/projects/joker.png"
  alt="Joker Chatbot - AI chatbot with witty personality built with Next.js and TypeScript"
/>
```

**Audit images:**
```bash
# Find images without alt text
grep -r "<Image" components/ | grep -v "alt="
grep -r "<img" components/ | grep -v "alt="
```

---

### 3. Internal Linking

**Current:** You have anchor links (#work, #skills, #contact)

**Enhance with:**
```typescript
// Add aria-labels for accessibility
<Link href="#work" aria-label="View my portfolio work">
  View My Work
</Link>

// Add descriptive text
<Link href="#contact" aria-label="Get in touch via contact form">
  Get In Touch
</Link>
```

---

### 4. Schema Markup for Projects

**Add to showcase section:**

```typescript
// components/sections/ShowcaseOfWorkSection.tsx
export function ProjectSchema({ project }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    image: project.image,
    url: project.link,
    author: {
      '@type': 'Person',
      name: 'Abishai Kashif',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

---

## Technical SEO Checklist

### Security Headers

**Add to next.config.mjs:**
```javascript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on'
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN'
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin'
        },
      ],
    },
  ];
},
```

---

### Preconnect to External Domains

**Add to app/layout.tsx head:**
```typescript
<head>
  <StructuredData />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  {/* Add other external domains you use */}
</head>
```

---

### Compression

**Vercel/Netlify:** Automatic ✅

**Custom server:**
```javascript
// Enable compression
const compression = require('compression');
app.use(compression());
```

---

## Monitoring & Analytics

### 1. Google Analytics 4

**Add to app/layout.tsx:**
```typescript
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-XXXXXXXXXX');
              `}
            </Script>
          </>
        )}
      </head>
      <body>{children}</body>
    </html>
  );
}
```

---

### 2. Vercel Analytics

```bash
npm install @vercel/analytics

# Add to app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

---

### 3. Web Vitals Monitoring

```typescript
// app/web-vitals.tsx
'use client';

import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    console.log(metric);
    // Send to analytics
    if (window.gtag) {
      window.gtag('event', metric.name, {
        value: Math.round(metric.value),
        metric_id: metric.id,
        metric_value: metric.value,
        metric_delta: metric.delta,
      });
    }
  });

  return null;
}

// Add to layout.tsx
import { WebVitals } from './web-vitals';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <WebVitals />
      </body>
    </html>
  );
}
```

---

## Performance Targets

### Lighthouse Scores (Aim for)
- 🎯 Performance: 90+
- 🎯 Accessibility: 95+
- 🎯 Best Practices: 95+
- 🎯 SEO: 100

### Core Web Vitals
- 🎯 LCP: < 2.5s
- 🎯 INP: < 200ms
- 🎯 CLS: < 0.1

### Page Speed
- 🎯 First Contentful Paint: < 1.8s
- 🎯 Time to Interactive: < 3.8s
- 🎯 Total Blocking Time: < 200ms

---

## Quick Wins

### Immediate (< 1 hour)
1. ✅ Add `display: "swap"` to fonts
2. ✅ Optimize icon imports
3. ✅ Add alt text to all images
4. ✅ Enable image optimization in production

### Short-term (1-2 days)
1. 📊 Set up Google Analytics
2. 📊 Add Vercel Analytics
3. 📊 Implement lazy loading for heavy components
4. 📊 Add security headers

### Long-term (ongoing)
1. 📈 Monitor Core Web Vitals
2. 📈 Analyze bundle size monthly
3. 📈 Review and optimize based on real user data
4. 📈 Keep dependencies updated

---

## Testing Commands

```bash
# Lighthouse audit
npx lighthouse https://your-domain.com --view

# Bundle analysis
ANALYZE=true npm run build

# Check for unused dependencies
npx depcheck

# Security audit
npm audit

# Performance budget
npx bundlesize
```

---

## Resources

- [web.dev/vitals](https://web.dev/vitals/)
- [Next.js Performance](https://nextjs.org/docs/app/building-your-application/optimizing)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)
