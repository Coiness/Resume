import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // 添加 images 配置
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'youke1.picui.cn', // 这是你图片 URL 中的域名
      },
    ],
  },
}

export default nextConfig
