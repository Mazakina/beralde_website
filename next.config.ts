import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
{
        protocol: 'https',
        hostname: 'fbdpcymlickcmbtjwxuo.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/products/**', // allow all images in this folder
      },
    ],
  },
};

export default nextConfig;
