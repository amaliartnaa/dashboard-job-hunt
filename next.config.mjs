/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ffmnttblpdhjffwxeldb.supabase.co'
      }
    ]
  }
};

export default nextConfig;
