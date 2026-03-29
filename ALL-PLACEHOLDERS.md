# 📋 ALL PLACEHOLDERS - Complete List

This document contains **every single placeholder** that needs to be replaced, organized by file.

## Quick Stats
- **Total Placeholders:** 7 unique types
- **Files to Update:** 4 files
- **Estimated Time:** 15-20 minutes

---

## 🔴 File 1: `app/layout.tsx`

### Line 42 - metadataBase
```typescript
metadataBase: new URL('https://[YOUR-DOMAIN].com'),
```
**Replace with:** `https://abishaikashif.com` (or your actual domain)

### Line 107 - Google Search Console Verification
```typescript
verification: {
  google: '[GOOGLE-SEARCH-CONSOLE-VERIFICATION-CODE]',
```
**Replace with:** Your verification code (get AFTER deploying)
**Example:** `abc123xyz456def789`

**How to get:**
1. Deploy your site first
2. Visit [Google Search Console](https://search.google.com/search-console)
3. Add property → Choose "HTML tag" method
4. Copy the `content` value
5. Paste here and redeploy

---

## 🔴 File 2: `app/sitemap.ts`

### Line 4 - Base URL
```typescript
const baseUrl = 'https://[YOUR-DOMAIN].com';
```
**Replace with:** `https://abishaikashif.com` (or your actual domain)

---

## 🔴 File 3: `app/robots.ts`

### Line 4 - Base URL
```typescript
const baseUrl = 'https://[YOUR-DOMAIN].com';
```
**Replace with:** `https://abishaikashif.com` (or your actual domain)

---

## 🔴 File 4: `lib/structured-data.ts`

### Line 8 - Person URL
```typescript
url: 'https://[YOUR-DOMAIN].com',
```
**Replace with:** `https://abishaikashif.com` (or your actual domain)

### Line 9 - Person Image
```typescript
image: 'https://[YOUR-DOMAIN].com/og-image.png',
```
**Replace with:** `https://abishaikashif.com/og-image.png` (or your actual domain)

### Line 15 - Email
```typescript
email: 'mailto:[YOUR-EMAIL]',
```
**Replace with:** `mailto:abishai@example.com` (your actual email)
**Example:** `mailto:abishai.kashif@gmail.com`

### Line 16 - Phone (OPTIONAL)
```typescript
telephone: '[YOUR-PHONE]',
```
**Replace with:** `+92-300-1234567` (your actual phone)
**OR DELETE THIS LINE** if you don't want to make your phone public

### Line 19 - City
```typescript
addressLocality: '[YOUR-CITY]',
```
**Replace with:** `Karachi` (or your actual city)

### Line 20 - Country
```typescript
addressCountry: '[YOUR-COUNTRY]',
```
**Replace with:** `Pakistan` (or your actual country)

### Line 35 - Website URL
```typescript
url: 'https://[YOUR-DOMAIN].com',
```
**Replace with:** `https://abishaikashif.com` (or your actual domain)

### Line 42 - ProfilePage URL
```typescript
item: 'https://[YOUR-DOMAIN].com',
```
**Replace with:** `https://abishaikashif.com` (or your actual domain)

---

## 📊 Placeholder Summary Table

| Placeholder | Count | Files | Priority |
|------------|-------|-------|----------|
| `[YOUR-DOMAIN]` | 6 | 4 files | 🔴 Critical |
| `[YOUR-EMAIL]` | 1 | 1 file | 🔴 Critical |
| `[YOUR-CITY]` | 1 | 1 file | 🔴 Critical |
| `[YOUR-COUNTRY]` | 1 | 1 file | 🔴 Critical |
| `[YOUR-PHONE]` | 1 | 1 file | 🟡 Optional |
| `[GOOGLE-VERIFICATION]` | 1 | 1 file | 🟡 Post-deploy |

---

## 🎯 Replacement Strategy

### Option 1: Manual Replacement (Recommended for beginners)
1. Open each file in your code editor
2. Use Find & Replace (Ctrl+H or Cmd+H)
3. Replace each placeholder one by one
4. Save all files

### Option 2: Automated Script (Faster)
```bash
# Make script executable
chmod +x replace-placeholders.sh

# Run the script
./replace-placeholders.sh

# Follow the prompts
```

### Option 3: Command Line (Advanced)
```bash
# Replace domain (all files)
find app lib -type f -exec sed -i 's/\[YOUR-DOMAIN\]/abishaikashif.com/g' {} +

# Replace email
sed -i 's/\[YOUR-EMAIL\]/abishai@example.com/g' lib/structured-data.ts

# Replace phone
sed -i 's/\[YOUR-PHONE\]/+92-XXX-XXXXXXX/g' lib/structured-data.ts

# Replace city
sed -i 's/\[YOUR-CITY\]/Karachi/g' lib/structured-data.ts

# Replace country
sed -i 's/\[YOUR-COUNTRY\]/Pakistan/g' lib/structured-data.ts
```

---

## ✅ Verification Checklist

After replacing placeholders, verify:

```bash
# 1. Check no placeholders remain
grep -r "\[YOUR-" app/ lib/
# Should return: no matches

# 2. Count replacements made
grep -r "abishaikashif.com" app/ lib/ | wc -l
# Should return: 6 (if that's your domain)

# 3. Verify email is set
grep "mailto:" lib/structured-data.ts
# Should show your email

# 4. Verify location is set
grep "addressLocality\|addressCountry" lib/structured-data.ts
# Should show your city and country

# 5. Test build
npm run build
# Should complete without errors
```

---

## 🚨 Common Mistakes

### 1. Forgetting the protocol
❌ `[YOUR-DOMAIN]` → `abishaikashif.com`
✅ `[YOUR-DOMAIN]` → `https://abishaikashif.com`

**Wait, actually NO!** The placeholder is just `[YOUR-DOMAIN]`, and the `https://` is already in the code:
```typescript
// The code already has https://
url: 'https://[YOUR-DOMAIN].com',

// So you replace ONLY the placeholder:
url: 'https://abishaikashif.com',
```

### 2. Leaving the brackets
❌ `[abishaikashif.com]`
✅ `abishaikashif.com`

### 3. Wrong email format
❌ `abishai@example.com` (missing mailto:)
✅ `mailto:abishai@example.com`

**Wait, check the code:**
```typescript
// The code already has mailto:
email: 'mailto:[YOUR-EMAIL]',

// So you replace ONLY the placeholder:
email: 'mailto:abishai@example.com',
```

### 4. Inconsistent domains
Make sure you use the SAME domain in all 6 places!

---

## 📝 Example: Complete Replacement

**Before:**
```typescript
// app/layout.tsx
metadataBase: new URL('https://[YOUR-DOMAIN].com'),

// lib/structured-data.ts
url: 'https://[YOUR-DOMAIN].com',
email: 'mailto:[YOUR-EMAIL]',
telephone: '[YOUR-PHONE]',
addressLocality: '[YOUR-CITY]',
addressCountry: '[YOUR-COUNTRY]',
```

**After:**
```typescript
// app/layout.tsx
metadataBase: new URL('https://abishaikashif.com'),

// lib/structured-data.ts
url: 'https://abishaikashif.com',
email: 'mailto:abishai.kashif@gmail.com',
telephone: '+92-300-1234567',
addressLocality: 'Karachi',
addressCountry: 'Pakistan',
```

---

## 🎯 Quick Action Plan

**Time: 15-20 minutes**

1. **Minute 0-5:** Replace domain in all 4 files
2. **Minute 5-10:** Replace email, phone, city, country
3. **Minute 10-15:** Verify with grep commands
4. **Minute 15-20:** Test build

**After deployment (separate session):**
- Add Google Search Console verification code
- Redeploy

---

## 🆘 Need Help?

### Can't find a placeholder?
```bash
# Search for specific placeholder
grep -rn "\[YOUR-DOMAIN\]" app/ lib/

# The -n flag shows line numbers
```

### Made a mistake?
```bash
# Restore from git
git checkout app/layout.tsx
git checkout app/sitemap.ts
git checkout app/robots.ts
git checkout lib/structured-data.ts

# Start over
```

### Want to see what changed?
```bash
# View changes
git diff app/layout.tsx
git diff lib/structured-data.ts
```

---

## ✨ After Completion

Once all placeholders are replaced:

1. ✅ Run `npm run build` - should succeed
2. ✅ Run `grep -r "\[YOUR-" app/ lib/` - should return nothing
3. ✅ Create `public/og-image.png` (1200x630px)
4. ✅ Deploy to production
5. ✅ Test URLs:
   - `https://your-domain.com/robots.txt`
   - `https://your-domain.com/sitemap.xml`
   - `https://your-domain.com/manifest.json`
6. ✅ Submit to Google Search Console
7. ✅ Test social sharing

---

**You're almost done! Just 15-20 minutes of work stands between you and world-class SEO! 🚀**
