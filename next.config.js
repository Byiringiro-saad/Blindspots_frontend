/** @type {import('next').NextConfig} */

const removeImports = require("next-remove-imports")();

const nextConfig = removeImports({
  reactStrictMode: true,
  swcMinify: true,
  experimental: { esmExternals: true },
  images: {
    domains: ["images.unsplash.com"],
  },
});

module.exports = nextConfig;
