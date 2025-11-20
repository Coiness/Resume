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
        className="flex items-center justify-between px-4 mb-4 cursor-pointer"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <h2 className="text-2xl font-bold">{title}</h2>
        {isCollapsed ? <ExpandLess /> : <ExpandMore />}
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
