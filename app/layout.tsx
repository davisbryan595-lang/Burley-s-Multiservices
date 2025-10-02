import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Burley's Multiservices | Professional Services in Wayne & Washtenaw Counties",
  description:
    "Expert drain cleaning, handyman services, property preservation, and janitorial services. Serving Wayne & Washtenaw counties with reliability and professionalism.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`relative font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        {/* Full-page animated gradient background */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[oklch(0.25_0.08_240)] via-[oklch(0.35_0.12_240)] to-[oklch(0.55_0.15_240)] animate-gradient" />

        {/* Optional subtle overlay pattern */}
        <div className="fixed inset-0 -z-10 bg-[url('/abstract-geometric-pattern.png')] opacity-5" />

        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
