import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ph4ntoms.org',
        port: '',
        pathname: '/gateway/api/v1/vaulty/shared/s3/content',
      },
    ],
  },
}

export default nextConfig
