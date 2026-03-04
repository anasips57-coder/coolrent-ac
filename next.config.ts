import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

const nextConfig: NextConfig = {
  output: "export",           // static export → generates /out folder
  // Only set basePath and assetPrefix when building on GitHub Actions
  basePath: isGithubActions ? "/coolrent-ac" : "",
  assetPrefix: isGithubActions ? "/coolrent-ac/" : "",
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

