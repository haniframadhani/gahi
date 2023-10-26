import { redirect } from 'next/navigation';
import { Metadata } from 'next';
import { DateTime } from 'luxon';
import '@/app/globals.css';

export const revalidate = 0;
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: {
    default: 'GAHI | Gambar Astronomi Hari Ini',
    template: '%s | GAHI'
  },
  description: 'Jelajahi alam semesta dengan gambar dan video astronomi yang luar biasa yang berbeda setiap harinya dengan penjelasan dari para pakar astronomi.',
  icons: {
    icon: ['/favicon.ico', '/favicon.png', '/favicon.svg', '/favicon16.ico', '/favicon32.ico', '/favicon64.ico', '/favicon128.ico'],
    apple: [{
      url: '/apple-touch-icon.png'
    }, {
      url: '/apple-touch-icon-57x57.png',
      sizes: '57x57',
      type: 'image/png'
    }, {
      url: '/apple-touch-icon-72x72.png',
      sizes: '72x72',
      type: 'image/png'
    }, {
      url: '/apple-touch-icon-76x76.png',
      sizes: '76x76',
      type: 'image/png'
    }, {
      url: '/apple-touch-icon-114x114.png',
      sizes: '114x114',
      type: 'image/png'
    }, {
      url: '/apple-touch-icon-120x120.png',
      sizes: '120x120',
      type: 'image/png'
    }, {
      url: '/apple-touch-icon-144x144.png',
      sizes: '144x144',
      type: 'image/png'
    }, {
      url: '/apple-touch-icon-152x152.png',
      sizes: '152x152',
      type: 'image/png'
    }, {
      url: '/apple-touch-icon-180x180.png',
      sizes: '180x180',
      type: 'image/png'
    }]
  },
  keywords: ['APOD', 'astronomy', 'astronomi', 'gambar astronomi', 'astronomy image', 'astronomy picture', 'astronomi video', 'video astronomi', 'galaxy', 'star', 'moon', 'nebula', 'comet', 'meteor', 'meteor shower', 'galaksi', 'bintang', 'matahari', 'bulan', 'hujan meteor', 'aurora', 'constellation', 'konstelasi', 'rasi bintang'],
  openGraph: {
    images: ['/opengraph-image.jpg']
  }, twitter: {
    card: 'summary_large_image',
    title: 'GAHI | Gambar Astronomi Hari Ini',
    description: 'Jelajahi alam semesta dengan gambar dan video astronomi yang luar biasa yang berbeda setiap harinya dengan penjelasan dari para pakar astronomi.',
    images: {
      url: '/opengraph-image.jpg',
      alt: 'gambar astronomi hari ini'
    },
  }
}

export default function Home() {
  const hariIni = DateTime.now().setZone('America/New_York').toFormat('yyyy-MM-dd');
  redirect(`date/${hariIni}`);
}
