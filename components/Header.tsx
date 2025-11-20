'use client'

import { MailOutline, GitHub, Phone } from '@mui/icons-material'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { resumeData } from '@/lib/data'

export default function Header() {
  const { name, basicInfo, avatarUrl } = resumeData

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      alert('已复制到剪贴板')
    } catch (err) {
      console.error('复制失败:', err)
    }
  }

  return (
    // 1. 使用 items-start 让子元素顶部对齐，不强制高度匹配
    <header className="flex flex-row justify-between items-start mb-12 px-4">
      {/* 左侧信息容器 */}
      <div className="flex flex-col gap-y-2 text-gray-500">
        <h1 className="text-4xl font-bold text-black">{name}</h1>
        <p className="text-xl text-gray-600">{basicInfo.job}</p>

        <div
          className="flex items-center gap-1 text-sm cursor-pointer hover:text-black"
          onClick={() => copyToClipboard(basicInfo.email)}
        >
          <MailOutline sx={{ fontSize: 16 }} />
          {basicInfo.email}
        </div>

        <div className="flex items-center gap-1 text-sm">
          <GitHub sx={{ fontSize: 16 }} />
          <a
            href={basicInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            {basicInfo.github}
          </a>
        </div>

        <div
          className="flex items-center gap-1 text-sm cursor-pointer hover:text-black"
          onClick={() => copyToClipboard(basicInfo.phone)}
        >
          <Phone sx={{ fontSize: 16 }} />
          {basicInfo.phone}
        </div>
      </div>

      {/* 2. 右侧头像：使用 self-stretch 和 aspect-square 让高度匹配左侧，并保持正方形 */}
      <Avatar className="self-stretch aspect-auto shrink-0 min-h-40 w-auto">
        <AvatarImage src={avatarUrl} alt={name} className="object-cover" />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
    </header>
  )
}
