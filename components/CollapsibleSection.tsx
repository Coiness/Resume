'use client'

import { useState, ReactNode } from 'react'
import { ExpandMore, ExpandLess } from '@mui/icons-material'

interface CollapsibleSectionProps {
  title: string
  children: ReactNode
}

export default function CollapsibleSection({ title, children }: CollapsibleSectionProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <section className="mb-8">
      <div
        className="flex items-center justify-between px-4 mb-6 cursor-pointer border-b border-gray-100 pb-2 hover:bg-gray-50/50 transition-colors rounded-t-lg"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <h2 className="text-2xl font-bold select-none text-slate-800">{title}</h2>
        {isCollapsed ? (
          <ExpandLess className="text-gray-400" />
        ) : (
          <ExpandMore className="text-gray-400" />
        )}
      </div>
      <div
        style={{
          maxHeight: isCollapsed ? '0' : '1000px',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
        }}
      >
        {children}
      </div>
    </section>
  )
}
