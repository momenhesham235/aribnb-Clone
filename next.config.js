/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["links.papareact.com", "images.unsplash.com", "img.icons8.com"],
  },
};

module.exports = nextConfig;
