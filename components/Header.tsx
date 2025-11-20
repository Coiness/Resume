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
    <header className="flex flex-col-reverse md:flex-row justify-between items-start mb-12 px-4 gap-6 md:gap-0">
      {/* 左侧信息容器 */}
      <div className="flex flex-col gap-y-3 text-gray-500">
        <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight">{name}</h1>
        <p className="text-2xl text-slate-600 font-medium mb-2">{basicInfo.job}</p>

        <div className="flex flex-col gap-2 mt-2">
          <div
            className="flex items-center gap-2 text-sm cursor-pointer hover:text-slate-900 transition-colors"
            onClick={() => copyToClipboard(basicInfo.email)}
          >
            <MailOutline sx={{ fontSize: 18 }} />
            <span>{basicInfo.email}</span>
          </div>

          <div className="flex items-center gap-2 text-sm hover:text-slate-900 transition-colors">
            <GitHub sx={{ fontSize: 18 }} />
            <a href={basicInfo.github} target="_blank" rel="noopener noreferrer" className="">
              {basicInfo.github}
            </a>
          </div>

          <div
            className="flex items-center gap-2 text-sm cursor-pointer hover:text-slate-900 transition-colors"
            onClick={() => copyToClipboard(basicInfo.phone)}
          >
            <Phone sx={{ fontSize: 18 }} />
            <span>{basicInfo.phone}</span>
          </div>
        </div>
      </div>

      {/* 2. 右侧头像：增加阴影和边框，使其更突出 */}
      <Avatar className="self-start md:self-stretch aspect-square shrink-0 h-32 w-32 md:h-40 md:w-40 border-4 border-white shadow-lg">
        <AvatarImage src={avatarUrl} alt={name} className="object-cover" />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
    </header>
  )
}
