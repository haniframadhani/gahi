/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NASA_API_KEY: process.env.NASA_API_KEY,
    MYMEMORY_EMAIL: process.env.MYMEMORY_EMAIL
  },
  images: {
    domains: ['img.youtube.com', 'apod.nasa.gov'],
    formats: ['image/webp'],
    // remotePatterns: [{
    //   protocol: 'https',
    //   // hostname: '**.nasa.gov/apod/'
    // }]
  }
}

module.exports = nextConfig
