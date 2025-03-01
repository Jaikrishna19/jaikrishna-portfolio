import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/jaikrishna-portfolio',
  assetPrefix: '/jaikrishna-portfolio/',
  images: {
    loader: 'akamai',
    path: '',
  },
}

export default nextConfig;