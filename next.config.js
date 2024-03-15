/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['blog.hubspot.com'],
  },
};

module.exports = withContentlayer(nextConfig);
