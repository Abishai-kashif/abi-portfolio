#!/bin/bash

# SEO Placeholder Replacement Script
# This script helps you quickly replace all SEO placeholders

echo "🎯 SEO Placeholder Replacement Tool"
echo "===================================="
echo ""

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to prompt for input
# prompt_input() {
#     local prompt_text=$1
#     local example=$2
#     echo -e "${YELLOW}$prompt_text${NC}"
#     echo -e "Example: $example"
#     read -p "> " input
#     echo "$input"
# }
prompt_input() {
    local prompt_text=$1
    local example=$2

    echo -e "${YELLOW}$prompt_text${NC}" >&2
    echo -e "Example: $example" >&2
    printf "> " >&2

    read input
    echo "$input"
}

echo "Let's configure your SEO settings..."
echo ""

# 1. Domain
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
DOMAIN=$(prompt_input "1. Enter your domain (without https://)" "abishaikashif.com")
echo ""

# 2. Email
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
EMAIL=$(prompt_input "2. Enter your email address" "abishai@example.com")
echo ""

# 3. Phone (optional)
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${YELLOW}3. Enter your phone number (or press Enter to skip)${NC}"
echo "Example: +92-300-1234567"
read -p "> " PHONE
echo ""

# 4. City
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
CITY=$(prompt_input "4. Enter your city" "Karachi")
echo ""

# 5. Country
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
COUNTRY=$(prompt_input "5. Enter your country" "Pakistan")
echo ""

# Confirmation
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${GREEN}Review your information:${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Domain:  https://$DOMAIN"
echo "Email:   $EMAIL"
if [ -n "$PHONE" ]; then
    echo "Phone:   $PHONE"
else
    echo "Phone:   (not provided)"
fi
echo "City:    $CITY"
echo "Country: $COUNTRY"
echo ""

read -p "Is this correct? (y/n) " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Cancelled. Please run the script again."
    exit 1
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${GREEN}Replacing placeholders...${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Replace domain in all files
echo "📝 Updating domain..."
find app lib -type f \( -name "*.ts" -o -name "*.tsx" \) -exec sed -i "s|\[YOUR-DOMAIN\]|$DOMAIN|g" {} +

# Replace email
echo "📝 Updating email..."
sed -i "s|\[YOUR-EMAIL\]|$EMAIL|g" lib/structured-data.ts

# Replace or remove phone
if [ -n "$PHONE" ]; then
    echo "📝 Updating phone..."
    sed -i "s|\[YOUR-PHONE\]|$PHONE|g" lib/structured-data.ts
else
    echo "📝 Removing phone line..."
    sed -i "/telephone: '\[YOUR-PHONE\]',/d" lib/structured-data.ts
fi

# Replace city
echo "📝 Updating city..."
sed -i "s|\[YOUR-CITY\]|$CITY|g" lib/structured-data.ts

# Replace country
echo "📝 Updating country..."
sed -i "s|\[YOUR-COUNTRY\]|$COUNTRY|g" lib/structured-data.ts

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${GREEN}✅ Placeholders replaced successfully!${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Verify no placeholders remain
REMAINING=$(grep -r "\[YOUR-" app/ lib/ 2>/dev/null | wc -l)

if [ "$REMAINING" -eq 0 ]; then
    echo -e "${GREEN}✅ All placeholders have been replaced!${NC}"
else
    echo -e "${RED}⚠️  Warning: $REMAINING placeholder(s) still remain${NC}"
    echo "Run this command to see them:"
    echo "  grep -r '\[YOUR-' app/ lib/"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${YELLOW}📋 Next Steps:${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "1. Create your Open Graph image:"
echo "   - Size: 1200x630 pixels"
echo "   - Save as: public/og-image.png"
echo "   - Tools: Canva, Figma, or og-image.vercel.app"
echo ""
echo "2. Test your build:"
echo "   npm run build"
echo ""
echo "3. Deploy your site:"
echo "   vercel deploy --prod"
echo ""
echo "4. After deployment, add Google Search Console verification:"
echo "   - Go to: https://search.google.com/search-console"
echo "   - Add your property"
echo "   - Get verification code"
echo "   - Update app/layout.tsx line 107"
echo "   - Redeploy"
echo ""
echo "5. Submit your sitemap:"
echo "   https://$DOMAIN/sitemap.xml"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${GREEN}🎉 SEO configuration complete!${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
