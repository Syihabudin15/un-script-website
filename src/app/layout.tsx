import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/next"


export const metadata: Metadata = {
  title: `Home | ${process.env.NEXT_PUBLIC_BASE_NAME}`,
  description: 'Penyedia jasa pembuatan Skripsi, Tesis, Aplikasi Mobile, Website dan Undangan Online',
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  openGraph: {
    title: `Home | ${process.env.NEXT_PUBLIC_BASE_NAME}`,
    description: 'Penyedia jasa pembuatan Skripsi, Tesis, Aplikasi Mobile, Website dan Undangan Online',
    url: '/',
    images: '/baseImg.jpg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body translate='yes'>
        {children}
        <SpeedInsights/>
        <Analytics/>
      </body>
    </html>
  )
}
