import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import EmotionRootStyleRegistry from '@/lib/EmotionRootStyleRegistry' // 导入注册表

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '我的在线简历',
  description: '使用 Next.js 创建的个人简历',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        {/* 使用注册表包裹 children */}
        <EmotionRootStyleRegistry>{children}</EmotionRootStyleRegistry>
      </body>
    </html>
  )
}
