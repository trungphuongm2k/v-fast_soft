/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    HOST_NAME_API: process.env.HOST_NAME_API,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['dev-vfast-api.vfastsoft.com'],
    loader: 'default',
  },
};

module.exports = nextConfig;
