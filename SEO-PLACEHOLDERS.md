# SEO Implementation - Placeholders to Fill

This document lists all placeholders that need to be replaced with your actual information for complete SEO optimization.

## 🔴 CRITICAL - Required for SEO to Work

### 1. Domain Name
**Location:** Multiple files
**Placeholder:** `[YOUR-DOMAIN]`
**Files to update:**
- `app/layout.tsx` (line 42)
- `app/sitemap.ts` (line 4)
- `app/robots.ts` (line 4)
- `lib/structured-data.ts` (lines 8, 9, 35, 42)

**Example:** Replace `https://[YOUR-DOMAIN].com` with `https://abishaikashif.com`

---

### 2. Contact Information
**Location:** `lib/structured-data.ts`

#### Email Address
**Placeholder:** `[YOUR-EMAIL]`
**Line:** 15
**Example:** `mailto:abishai@example.com`

#### Phone Number (Optional)
**Placeholder:** `[YOUR-PHONE]`
**Line:** 16
**Example:** `+1-234-567-8900` or remove this line if not public

---

### 3. Location Information
**Location:** `lib/structured-data.ts` (lines 18-21)

#### City
**Placeholder:** `[YOUR-CITY]`
**Example:** `Karachi`, `New York`, `London`

#### Country
**Placeholder:** `[YOUR-COUNTRY]`
**Example:** `Pakistan`, `United States`, `United Kingdom`

---

### 4. Google Search Console Verification
**Location:** `app/layout.tsx` (line 107)
**Placeholder:** `[GOOGLE-SEARCH-CONSOLE-VERIFICATION-CODE]`

**How to get this:**
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (website)
3. Choose "HTML tag" verification method
4. Copy the content value from the meta tag
5. Paste it here

**Example:** `google-site-verification=abc123xyz456`

---

## 🟡 RECOMMENDED - Enhances SEO

### 5. Open Graph Image
**Location:** `public/og-image.png`
**Current Status:** ❌ Missing

**Requirements:**
- Dimensions: 1200x630 pixels
- Format: PNG or JPG
- File size: < 1MB
- Content: Your photo, name, title, and branding

**Tools to create:**
- [Canva](https://www.canva.com/) - Free templates
- [Figma](https://www.figma.com/) - Design tool
- [OG Image Generator](https://og-image.vercel.app/) - Quick generator

---

### 6. Favicon
**Location:** `public/favicon.ico`
**Current Status:** ⚠️ Check if exists

**Requirements:**
- Format: ICO or PNG
- Sizes: 16x16, 32x32, 48x48
- Should match your brand

---

### 7. Additional Search Engine Verifications (Optional)
**Location:** `app/layout.tsx` (lines 108-109)

#### Bing Webmaster Tools
**Placeholder:** `[BING-VERIFICATION-CODE]`
**Uncomment line 109 and add code**

#### Yandex Webmaster
**Placeholder:** `[YANDEX-VERIFICATION-CODE]`
**Uncomment line 108 and add code**

---

## 📋 Quick Checklist

Before deploying, ensure you've replaced:

- [ ] `[YOUR-DOMAIN]` in all 4 files
- [ ] `[YOUR-EMAIL]` in structured-data.ts
- [ ] `[YOUR-PHONE]` in structured-data.ts (or remove)
- [ ] `[YOUR-CITY]` in structured-data.ts
- [ ] `[YOUR-COUNTRY]` in structured-data.ts
- [ ] `[GOOGLE-SEARCH-CONSOLE-VERIFICATION-CODE]` in layout.tsx
- [ ] Created `public/og-image.png` (1200x630px)
- [ ] Verified `public/favicon.ico` exists

---

## 🚀 After Deployment

1. **Test your SEO:**
   - Visit `https://your-domain.com/robots.txt`
   - Visit `https://your-domain.com/sitemap.xml`
   - View page source and search for `application/ld+json`

2. **Submit to Google:**
   - [Google Search Console](https://search.google.com/search-console)
   - Submit your sitemap: `https://your-domain.com/sitemap.xml`

3. **Test Social Sharing:**
   - [Facebook Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)
   - [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

4. **Run SEO Audit:**
   - Chrome DevTools → Lighthouse
   - [PageSpeed Insights](https://pagespeed.web.dev/)

---

## 📝 Notes

- All social media links are already configured from your `data/index.ts`
- Skills and services are automatically pulled from your data
- The structured data includes your GitHub, LinkedIn, Twitter, Instagram, and Facebook profiles
- Your current work at Devotic Labs and education at GIAIC are included

---

## 🆘 Need Help?

If you're unsure about any placeholder:
1. Domain: Use your actual website URL (e.g., `abishaikashif.com`)
2. Email: Use a professional email you check regularly
3. Phone: Optional - only add if you want to be contacted by phone
4. Location: Use your current city and country
5. Verification codes: Get these after deploying your site
