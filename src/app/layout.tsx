import './globals.css'
import type { Metadata } from 'next'
// import { Providers } from '@/redux/provider'

export const metadata: Metadata = {
  title: {
    default: 'GAHI | Gambar Astronomi Hari Ini',
    template: '%s | GAHI'
  },
  description: 'Jelajahi alam semesta dengan gambar dan video astronomi yang luar biasa yang berbeda setiap harinya dengan penjelasan dari para pakar astronomi.',
  icons: {
    icon: ['/favicon.ico', '/favicon.png', '/favicon.svg', '/favicon16.ico', '/favicon32.ico', '/favicon64.ico', '/favicon128.ico']
  },
  keywords: ['APOD', 'astronomy', 'astronomi', 'gambar astronomi', 'astronomy image', 'astronomy picture', 'astronomi video', 'video astronomi', 'galaxy', 'star', 'moon', 'nebula', 'comet', 'meteor', 'meteor shower', 'galaksi', 'bintang', 'matahari', 'bulan', 'hujan meteor', 'aurora', 'constellation', 'konstelasi', 'rasi bintang'],
  openGraph: {
    images: ['/opengraph-image.jpg']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
