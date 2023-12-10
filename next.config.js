/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "egyptictourswebsite-b4d86fe.payloadcms.app",
      },
    ],
  },
};

module.exports = nextConfig;
