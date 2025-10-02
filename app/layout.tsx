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
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased relative`}
      >
        {/* Full page animated gradient background */}
        <div className="fixed inset-0 -z-10">
          <div className="w-full h-full animate-gradient bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500" />
        </div>

        {/* Page content */}
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
