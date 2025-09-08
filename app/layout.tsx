import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "FreshTech Solutions - Innovative Software Development",
  description:
    "We build fresh, scalable software solutions. Specializing in AI/ML, web development, mobile apps, and cloud solutions for healthcare, real estate, startups, and enterprises.",
  keywords:
    "software development, AI, machine learning, web development, mobile apps, cloud solutions, healthcare tech, proptech, startup solutions",
  authors: [{ name: "FreshTech Solutions" }],
  creator: "FreshTech Solutions",
  publisher: "FreshTech Solutions",
  openGraph: {
    title: "FreshTech Solutions - Innovative Software Development",
    description: "We build fresh, scalable software solutions for modern businesses.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "FreshTech Solutions - Innovative Software Development",
    description: "We build fresh, scalable software solutions for modern businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
