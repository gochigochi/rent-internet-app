/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['db.rent-internet.com'],
  },
}

module.exports = nextConfig
