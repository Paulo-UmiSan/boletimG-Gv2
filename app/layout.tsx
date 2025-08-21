import type React from "react"
import type { Metadata } from "next"
import { Work_Sans, Open_Sans } from "next/font/google"
import "./globals.css"

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "UMI SAN - Boletim Mensal G&G",
  description: "Boletim Mensal de Gente & Gestão - Julho/2025",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${workSans.variable} ${openSans.variable} antialiased`}>
      <body className="min-h-screen bg-background text-foreground">{children}</body>
    </html>
  )
}
