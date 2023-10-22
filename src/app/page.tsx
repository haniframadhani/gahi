import { redirect } from 'next/navigation';
import { Metadata } from 'next';
import { DateTime } from 'luxon';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'GAHI | Gambar Astronomi Hari Ini',
    template: '%s | GAHI'
  },
  description: 'Jelajahi alam semesta dengan gambar dan video astronomi yang luar biasa yang berbeda setiap harinya dengan penjelasan dari para pakar astronomi.',
  icons: {
    icon: ['/favicon.ico', '/favicon.png', '/favicon.svg', '/favicon16.ico', '/favicon32.ico', '/favicon64.ico', '/favicon128.ico']
  },
  openGraph: {
    images: ['/opengraph-image.jpg']
  }
}

export default function Home() {
  const hariIni = DateTime.now().setZone('America/New_York').toFormat('yyyy-MM-dd');
  redirect(`date/${hariIni}`);
}
