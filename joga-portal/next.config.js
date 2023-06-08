/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  nextConfig,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'http://localhost:3000',
        port: '',
        pathname: 'joga-portal/assets/covers'
      }
    ]
  }
};
