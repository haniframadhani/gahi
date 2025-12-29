# GAHI — Gambar Astronomi Hari Ini

GAHI menampilkan gambar dan video astronomi harian lengkap dengan penjelasan singkat. Tujuan proyek ini adalah membuat konten APOD (Astronomy Picture of the Day) lebih mudah diakses dan dibagikan.

Demo: https://gahi-apod.vercel.app/

## Ringkasan

- **Nama:** GAHI (Gambar Astronomi Hari Ini)
- **Fungsionalitas utama:** Menampilkan APOD harian, terjemahan teks (via MyMemory), dan halaman arsip per tanggal.

## Fitur

- Menampilkan gambar atau video APOD setiap hari
- Penjelasan deskriptif yang dapat diterjemahkan
- Halaman arsip untuk melihat konten berdasarkan tanggal

## Teknologi

- Next.js (app router)
- TypeScript
- API: APOD NASA, MyMemory (terjemahan)

## Prasyarat

- Node.js 18+ (direkomendasikan)
- npm atau yarn

## Konfigurasi

1. Salin contoh environment:

   ```bash
   cp env.example .env.local
   ```

2. Isi variabel yang diperlukan di `.env.local` (contoh di `env.example`):

   - `NEXT_PUBLIC_NASA_API_KEY` — kunci API untuk APOD NASA (daftar di https://api.nasa.gov/)
   - `MYMEMORY_EMAIL` email untuk menggunakan api mymemory

Catatan: jangan commit kunci API ke repositori publik.

## Menjalankan secara lokal

1. Install dependensi:

   ```bash
   npm install
   # atau
   yarn install
   ```

2. Jalankan mode pengembangan:

   ```bash
   npm run dev
   # atau
   yarn dev
   ```

3. Buka `http://localhost:3000` di browser.

Untuk build produksi:

```bash
npm run build
npm run start
```

## Struktur proyek (ringkas)

- `src/app/` — rute Next.js (halaman, layout, not-found)
- `src/app/component/` — komponen ulang pakai (mis. datePicker, footer)
- `env.example` — contoh variabel environment

## API yang digunakan

- APOD NASA: https://api.nasa.gov/#apod — menyajikan gambar/video dan metadata harian
- MyMemory: https://mymemory.translated.net/doc/spec.php — layanan terjemahan teks

## Kontribusi

- Fork repositori, buat branch fitur, lalu buat pull request.
- Pastikan perubahan kecil, dengan deskripsi PR yang jelas.