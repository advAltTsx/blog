/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer');

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/posts',
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['blog.hubspot.com'],
  },
};

module.exports = withContentlayer(nextConfig);
