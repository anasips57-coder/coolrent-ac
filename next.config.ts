import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",           // static export → generates /out folder
  basePath: "/coolrent-ac",   // must match your GitHub repo name
  assetPrefix: "/coolrent-ac/",
  images: {
    unoptimized: true,        // required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;

