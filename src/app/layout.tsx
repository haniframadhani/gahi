import './globals.css'
import type { Metadata } from 'next'
import { Providers } from '@/redux/provider'

export const metadata: Metadata = {
  title: 'GAHI | Gambar Astronomi Hari Ini',
  description: 'Jelajahi alam semesta dengan gambar dan video astronomi yang luar biasa yang berbeda setiap harinya dengan penjelasan dari para pakar astronomi.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
