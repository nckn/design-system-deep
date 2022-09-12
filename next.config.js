const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // SASS
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  // Images
  images: {
    domains: [
      "rickandmortyapi.com"
    ],
    loader: "custom",
    path: "/"
  }
}

module.exports = nextConfig
