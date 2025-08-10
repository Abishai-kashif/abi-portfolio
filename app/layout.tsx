import "./globals.css"
import type React from "react"
import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Montserrat, Lora, Hind_Madurai } from "next/font/google"


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

export const metadata: Metadata = {
  title: "Abishai K. | Portfolio",
  description: "A digital representation of my professional life ~ My Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lora.variable} ${hindMadurai.variable} antialiased`}>
      <body className="bg-black">
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  )
}
