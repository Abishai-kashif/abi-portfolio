# 🎯 SEO Placeholders - Quick Reference

Replace these placeholders before deploying your portfolio.

## 🔴 CRITICAL (Required)

### 1. Domain Name
**Find & Replace:** `[YOUR-DOMAIN]`
**Example:** `abishaikashif.com` or `abishai.dev`

**Files to update (4 total):**
```bash
app/layout.tsx          → Line 42
app/sitemap.ts          → Line 4
app/robots.ts           → Line 4
lib/structured-data.ts  → Lines 8, 9, 35, 42
```

**Search command:**
```bash
grep -r "\[YOUR-DOMAIN\]" app/ lib/
```

---

### 2. Contact Information
**File:** `lib/structured-data.ts`

```typescript
// Line 15 - Email
email: 'mailto:[YOUR-EMAIL]',
// Replace with: 'mailto:abishai@example.com'

// Line 16 - Phone (optional - can remove if not public)
telephone: '[YOUR-PHONE]',
// Replace with: '+92-XXX-XXXXXXX' or remove line
```

---

### 3. Location
**File:** `lib/structured-data.ts` (lines 18-21)

```typescript
address: {
  '@type': 'PostalAddress',
  addressLocality: '[YOUR-CITY]',      // e.g., 'Karachi'
  addressCountry: '[YOUR-COUNTRY]',    // e.g., 'Pakistan'
},
```

---

### 4. Google Search Console
**File:** `app/layout.tsx` (line 107)

```typescript
verification: {
  google: '[GOOGLE-SEARCH-CONSOLE-VERIFICATION-CODE]',
  // Get this AFTER deploying - see instructions below
}
```

**How to get:**
1. Deploy your site first
2. Go to [Google Search Console](https://search.google.com/search-console)
3. Add property → Enter your domain
4. Choose "HTML tag" method
5. Copy the `content` value
6. Paste here and redeploy

---

## 🟡 RECOMMENDED (Enhances SEO)

### 5. Open Graph Image
**Location:** `public/og-image.png`
**Status:** ❌ MISSING - Must create

**Requirements:**
- Size: 1200 x 630 pixels (exact)
- Format: PNG or JPG
- Max size: 1MB
- Content: Your photo + name + title + tech stack

**Quick creation:**
- [Canva](https://www.canva.com/) → "Facebook Post" template
- [Figma](https://www.figma.com/) → Custom design
- [OG Image Generator](https://og-image.vercel.app/)

---

### 6. Favicon
**Location:** `public/favicon.ico`
**Current:** Using logo.svg as fallback
**Recommended:** Add proper favicon.ico (16x16, 32x32, 48x48)

---

## 📋 Pre-Deployment Checklist

```bash
# 1. Search for all placeholders
grep -r "\[YOUR-" app/ lib/ public/

# 2. Verify no placeholders remain
# Should return: no matches

# 3. Check OG image exists
ls -lh public/og-image.png

# 4. Test build
npm run build

# 5. Check for errors
npm run lint
```

---

## 🚀 Post-Deployment Steps

### Immediate (Day 1)
1. ✅ Test robots.txt: `https://your-domain.com/robots.txt`
2. ✅ Test sitemap: `https://your-domain.com/sitemap.xml`
3. ✅ Test manifest: `https://your-domain.com/manifest.json`
4. ✅ View page source → Check for structured data

### Week 1
1. 📊 Submit to Google Search Console
2. 📊 Submit sitemap
3. 📊 Request indexing
4. 🧪 Test social sharing:
   - [Facebook Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Validator](https://cards-dev.twitter.com/validator)
   - [LinkedIn Inspector](https://www.linkedin.com/post-inspector/)

### Week 2-4
1. 📈 Monitor Google Search Console
2. 📈 Check indexing status
3. 📈 Review search queries
4. 📈 Optimize based on data

---

## 🔍 Verification Commands

```bash
# Check all placeholders are replaced
grep -r "\[YOUR-" app/ lib/ public/ | wc -l
# Should output: 0

# List all SEO files created
ls -1 app/sitemap.ts app/robots.ts lib/structured-data.ts components/structured-data.tsx public/manifest.json

# Test build
npm run build && npm run start

# Check for TypeScript errors
npx tsc --noEmit
```

---

## 📝 Example Values

Here's a complete example for reference:

```typescript
// Domain
'https://abishaikashif.com'

// Email
'mailto:abishai.kashif@gmail.com'

// Phone (optional)
'+92-300-1234567'

// Location
addressLocality: 'Karachi'
addressCountry: 'Pakistan'

// Google verification (get after deployment)
google: 'abc123xyz456def789'
```

---

## ⚡ Quick Replace Script

Create a file `replace-placeholders.sh`:

```bash
#!/bin/bash

DOMAIN="your-domain.com"
EMAIL="your-email@example.com"
PHONE="+92-XXX-XXXXXXX"
CITY="Your City"
COUNTRY="Your Country"

# Replace domain
find app lib -type f -exec sed -i "s/\[YOUR-DOMAIN\]/$DOMAIN/g" {} +

# Replace contact info
sed -i "s/\[YOUR-EMAIL\]/$EMAIL/g" lib/structured-data.ts
sed -i "s/\[YOUR-PHONE\]/$PHONE/g" lib/structured-data.ts
sed -i "s/\[YOUR-CITY\]/$CITY/g" lib/structured-data.ts
sed -i "s/\[YOUR-COUNTRY\]/$COUNTRY/g" lib/structured-data.ts

echo "✅ Placeholders replaced!"
echo "⚠️  Don't forget to:"
echo "   1. Create public/og-image.png"
echo "   2. Add Google verification code after deployment"
```

Make executable: `chmod +x replace-placeholders.sh`

---

## 🆘 Common Issues

### "Placeholders still showing in production"
- Clear build cache: `rm -rf .next`
- Rebuild: `npm run build`
- Check you edited the right files

### "Social preview not working"
- OG image must exist at `public/og-image.png`
- Must be 1200x630px exactly
- Clear social media cache (use debugger tools)

### "Sitemap not found"
- File must be `app/sitemap.ts` (not `app/sitemap.xml`)
- Next.js generates XML automatically
- Rebuild and redeploy

---

## ✅ Final Checklist

Before marking SEO as complete:

- [ ] All `[YOUR-DOMAIN]` replaced (4 files)
- [ ] Email added in structured-data.ts
- [ ] Phone added or removed in structured-data.ts
- [ ] City and country added in structured-data.ts
- [ ] OG image created (1200x630px)
- [ ] Favicon verified
- [ ] Build succeeds: `npm run build`
- [ ] No TypeScript errors: `npx tsc --noEmit`
- [ ] Deployed to production
- [ ] robots.txt accessible
- [ ] sitemap.xml accessible
- [ ] Structured data visible in page source
- [ ] Google Search Console verification added
- [ ] Sitemap submitted to Google

---

**Estimated time to complete:** 30-45 minutes

**Priority order:**
1. Domain name (5 min)
2. Contact info (5 min)
3. OG image (15-30 min)
4. Deploy (5 min)
5. Google verification (5 min)
