import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
      },
      {
        protocol: "http",
        hostname: "192.168.0.172",
        port: "8000",
      },
      {
        protocol: "https",
        hostname: "green-shop-og6h.onrender.com",
        port: "80",
      },
    ],
  },
};

export default nextConfig;
