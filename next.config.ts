// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kimi-web-img.moonshot.cn",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
