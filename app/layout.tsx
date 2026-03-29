import "./globals.css"
import type React from "react"
import type { Metadata, Viewport } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Montserrat, Lora, Hind_Madurai } from "next/font/google"
import { StructuredData } from "@/components/structured-data"


export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-montserrat",
  display: "fallback",
  fallback: ["Arial", "sans-serif"],
});

export const lora = Lora({
  subsets: ["cyrillic-ext", "symbols"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora"
})

export const hindMadurai = Hind_Madurai({
  subsets: ["tamil", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind-madurai"
})

// Viewport configuration (required as separate export in Next.js 14+)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://[YOUR-DOMAIN].com'),
  title: {
    default: 'Abishai K. | Full-Stack Developer & AI Solutions Architect',
    template: '%s | Abishai K.',
  },
  description: 'Full-stack developer specializing in React, Next.js, TypeScript, Node.js, and AI-driven applications. Building luxury web experiences and intelligent AI solutions with modern technologies.',
  keywords: [
    'Full-Stack Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'AI Solutions',
    'Agentic AI',
    'Web Development',
    'Frontend Developer',
    'Backend Developer',
    'MERN Stack',
    'Node.js',
    'Python Developer',
    'AI Chatbots',
    'OpenAI Integration',
    'PostgreSQL',
    'MongoDB',
    'Tailwind CSS',
    'API Development',
    'Abishai K',
    'Abishai Kashif',
  ],
  authors: [{ name: 'Abishai K.', url: 'https://[YOUR-DOMAIN].com' }],
  creator: 'Abishai K.',
  publisher: 'Abishai K.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://[YOUR-DOMAIN].com',
    siteName: 'Abishai K. Portfolio',
    title: 'Abishai K. | Full-Stack Developer & AI Solutions Architect',
    description: 'Full-stack developer specializing in React, Next.js, TypeScript, and AI-driven applications. Building luxury web experiences and intelligent solutions.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Abishai K. - Full-Stack Developer Portfolio',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abishai K. | Full-Stack Developer & AI Solutions Architect',
    description: 'Building luxury web experiences and intelligent AI solutions with React, Next.js, TypeScript, and modern technologies.',
    creator: '@abishai_k11572',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '[GOOGLE-SEARCH-CONSOLE-VERIFICATION-CODE]',
    // yandex: '[YANDEX-VERIFICATION-CODE]',
    // bing: '[BING-VERIFICATION-CODE]',
  },
  category: 'technology',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/logo.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${lora.variable} ${hindMadurai.variable} antialiased`}
    >
      <head>
        <StructuredData />
      </head>
      <body className="bg-black">
        <Header />
        {children}
      </body>
    </html>
  );
}
