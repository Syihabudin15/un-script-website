import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { AntdRegistry } from '@ant-design/nextjs-registry'

export const metadata: Metadata = {
  title: {
    default: "Home",
    template: `%s | ${process.env.NEXT_PUBLIC_BASE_NAME}`
  },
  description: `${process.env.NEXT_PUBLIC_BASE_NAME} adalah penyedia jasa yang berpengalaman untuk pembuatan Skripsi, Tesis, Aplikasi Mobile, Website dan Undangan Digital dengan harga murah, mulai dari Rp. 50.000`,
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  openGraph: {
    title: {
      default: "Home",
      template: `%s | ${process.env.NEXT_PUBLIC_BASE_NAME}`
    },
    description: `${process.env.NEXT_PUBLIC_BASE_NAME} adalah penyedia jasa yang berpengalaman untuk pembuatan Skripsi, Tesis, Aplikasi Mobile, Website dan Undangan Digital dengan harga murah, mulai dari Rp. 50.000`,
    url: '/',
    images: '/baseImg.jpg',
    locale: 'en_US',
    type: 'website',
    siteName: `${process.env.NEXT_PUBLIC_SITE_NAME}`
  },
  alternates: {canonical: '/'},
  robots: {index: true, follow: true},
  keywords: [""],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body translate='yes'>
        <AntdRegistry>{children}</AntdRegistry>
        <SpeedInsights/>
        <Analytics/>
      </body>
    </html>
  )
}
