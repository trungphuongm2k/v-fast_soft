/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    HOST_NAME_API: process.env.HOST_NAME_API,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.vfastsoft.com',
      },
    ],
    domains: ['https://dev-vfast-api.vfastsoft.com', 'vfastsoft.com'],
    path: '/_next/image',
  },
};

module.exports = nextConfig;
