import { redirect } from 'next/navigation';
import { Metadata } from 'next';
import { DateTime } from 'luxon';
import '@/app/globals.css';
// import { setSelectedDate } from "@/redux/features/contentSlice";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export const metadata: Metadata = {
  title: 'GAHI | Gambar Astronomi Hari Ini',
  description: 'Jelajahi alam semesta dengan gambar dan video astronomi yang luar biasa yang berbeda setiap harinya dengan penjelasan dari para pakar astronomi.',
}

export default function Home() {
  const hariIni = DateTime.now().setZone('America/New_York').toFormat('yyyy-MM-dd');
  redirect(`date/${hariIni}`);
}
