import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configurações de otimização
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Configurações para favicon e PWA
  generateBuildId: async () => {
    return 'javascript-fundamentos-build'
  },
  
  // Headers para melhor SEO e compartilhamento
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },

  // Configurações para favicon
  webpack: (config) => {
    // Configurações adicionais do webpack se necessário
    return config;
  },
};

export default nextConfig;
