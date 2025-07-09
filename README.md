# Next.js 15 Portfolio with Tailwind CSS and Shadcn UI

A comprehensive portfolio website built with Next.js 15, featuring custom Tailwind CSS colors, Shadcn UI components, and a modular section-based architecture.

## 🚀 Features

- **Next.js 15** with App Router
- **Tailwind CSS** with custom color palette
- **Shadcn UI** component library integration
- **Responsive design** with mobile-first approach
- **Modular section components** for easy customization
- **TypeScript** for type safety
- **Custom global layout class** for consistent spacing

## 🎨 Custom Color Palette

This project uses a custom purple-themed color palette:

- `dark-purple`: #4e1f61 - Primary dark color
- `light-purple`: #cb6ce6 - Main text color
- `bright-purple`: #dc00f2 - Accent text color
- `accent-purple`: #bd00ff - Secondary accent color

### Usage Examples

\`\`\`tsx
// Text colors
<h1 className="text-light-purple">Main heading</h1>
<span className="text-bright-purple">Accent text</span>

// Background colors
<div className="bg-dark-purple">Dark background</div>
<button className="bg-accent-purple">Accent button</button>
\`\`\`

## 🏗️ Project Structure

\`\`\`
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles and custom classes
├── components/
│   ├── ui/                 # Shadcn UI components
│   ├── HeroSection.tsx
│   ├── CollaboratorsNetworkSection.tsx
│   ├── EndorsementsFeedbackSection.tsx
│   ├── ShowcaseOfWorkSection.tsx
│   ├── TechnicalProficienciesSection.tsx
│   ├── MyOfferingsSection.tsx
│   ├── GetInTouchSection.tsx
│   ├── MyOnlinePresenceSection.tsx
│   ├── MilestonesRecognitionsSection.tsx
│   └── FrequentlyAskedQuestionsSection.tsx
└── lib/
    └── utils.ts            # Utility functions including cn()
\`\`\`

## 📱 Section Components

### 1. HeroSection
- Main landing section with call-to-action buttons
- Uses Shadcn UI Button components
- Responsive typography with gradient text effects

### 2. CollaboratorsNetworkSection
- Displays collaboration partnerships
- Card-based layout with glassmorphism effects

### 3. EndorsementsFeedbackSection
- Client testimonials and feedback
- Avatar placeholders and rating system

### 4. ShowcaseOfWorkSection
- Portfolio project gallery
- Interactive project cards with hover effects

### 5. TechnicalProficienciesSection
- Skills and technologies display
- Badge components for skill tags

### 6. MyOfferingsSection
- Services and offerings overview
- Icon-based service cards

### 7. GetInTouchSection
- Contact information and forms
- Multiple contact methods display

### 8. MyOnlinePresenceSection
- Social media and platform links
- Interactive button grid layout

### 9. MilestonesRecognitionsSection
- Career achievements timeline
- Chronological milestone display

### 10. FrequentlyAskedQuestionsSection
- FAQ accordion interface
- Uses Shadcn UI Accordion component

## 🎯 Global Layout Class

The `.container-layout` class provides consistent spacing across all sections:

\`\`\`css
.container-layout {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
\`\`\`

### Usage
\`\`\`tsx
<div className="container-layout">
  {/* Your content here */}
</div>
\`\`\`

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. Clone the repository:
\`\`\`bash
git clone <your-repo-url>
cd nextjs-15-portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Copy environment variables:
\`\`\`bash
cp .env.local.example .env.local
\`\`\`

4. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Adding New Colors
1. Add your color to `tailwind.config.ts`:
\`\`\`ts
colors: {
  'your-color': '#hexcode',
  // ... existing colors
}
\`\`\`

2. Use in components:
\`\`\`tsx
<div className="text-your-color bg-your-color">
  Content
</div>
\`\`\`

### Creating New Sections
1. Create a new component in `src/components/`:
\`\`\`tsx
export default function YourNewSection() {
  return (
    <section className="py-16 px-4">
      <div className="container-layout">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Your <span className="text-bright-purple">Section</span>
        </h2>
        {/* Your content */}
      </div>
    </section>
  )
}
\`\`\`

2. Import and add to `src/app/page.tsx`:
\`\`\`tsx
import YourNewSection from '@/components/YourNewSection'

// Add to the component list in the main page
\`\`\`

## 📦 Built With

- [Next.js 15](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Shadcn UI](https://ui.shadcn.com/) - Component library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Lucide React](https://lucide.dev/) - Icon library

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
This project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help with setup, please open an issue or contact me directly.

---

Built with ❤️ using Next.js 15, Tailwind CSS, and Shadcn UI
