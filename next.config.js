/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    DOMAIN_SERVER: process.env.DOMAIN_SERVER,
  },
  // experimental: {
  //   appDir: true,
  //   serverComponentsExternalPackages: ["@prisma/client", "bcryptjs"]
  // },
}

module.exports = nextConfig
