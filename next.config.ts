import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // This wildcard allows any hostname
        port: '',
        pathname: '/**', // This wildcard allows any path
      },
    ],
  },
};

export default withNextIntl(nextConfig);
