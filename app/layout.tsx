import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Press_Start_2P } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _pressStart2P = Press_Start_2P({ weight: '400', subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'PradipasPorto',
  description: 'Created with my Mine Mind Brain love oh my god',
  generator: 'Next.js',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_pressStart2P.className} font-mono antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
