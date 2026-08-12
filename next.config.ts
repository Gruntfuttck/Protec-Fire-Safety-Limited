import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: process.env.GITHUB_PAGES === "true" ? "export" : undefined,
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
  typescript: {
    tsconfigPath: process.env.GITHUB_PAGES === "true" ? "tsconfig.pages.json" : "tsconfig.json",
  },
};

export default nextConfig;
