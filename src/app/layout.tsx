import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { AntdRegistry } from '@ant-design/nextjs-registry'

export const metadata: Metadata = {
  title: `Home | ${process.env.NEXT_PUBLIC_BASE_NAME}`,
  description: `${process.env.NEXT_PUBLIC_BASE_NAME} menyediakan jasa untuk pembuatan Skripsi, Tesis, Aplikasi Mobile, Website dan Undangan Online dengan harga yang murah`,
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  openGraph: {
    title: `Home | ${process.env.NEXT_PUBLIC_BASE_NAME}`,
    description: `${process.env.NEXT_PUBLIC_BASE_NAME} menyediakan jasa untuk pembuatan Skripsi, Tesis, Aplikasi Mobile, Website dan Undangan Online dengan harga yang murah`,
    url: '/',
    images: '/baseImg.jpg',
    locale: 'en_US',
    type: 'website',
    siteName: `Home | ${process.env.NEXT_PUBLIC_BASE_NAME}`
  },
  alternates: {canonical: '/'},
  robots: {index: true, follow: true},
  keywords: "un-script, un script, uns, jasa pembuatan skripsi, jasa pembuatan tesis, jasa pembuatan tugas akhir, jasa pembuatan website, jasa pembuatan aplikasi mobile, jasa pembuatan undangan digital, jasa pembuatan undangan online, bimbingan skripsi, bimbingan tesis, kelas online, kelas programming, kursus online, kursus online programing, kursus online murah, kursus online murah berkualitas, belajar programming, belajar coding, belajar programming dari dasar, belajar coding pemula"
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
