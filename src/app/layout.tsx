import type { Metadata } from "next"

import { url } from "@/lib/config"
import { client } from "@/lib/prismic"
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Disclaimer from "@/components/Disclaimer"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(url),
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const {
    data: { navLinks },
  } = await client.getSingle("settings")

  const {
    data: { heading, content },
  } = await client.getSingle("disclaimer")

  return (
    <html lang="en" className="scroll-p-16 scroll-smooth">
      <body
        className={`${playfairDisplay.variable} ${plusJakartaSans.variable} font-sans antialiased`}
      >
        <Navbar navLinks={navLinks} />
        <Disclaimer heading={heading} content={content} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
