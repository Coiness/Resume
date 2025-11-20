import Header from '@/components/Header'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Education from '@/components/Education'

export default function Home() {
  return (
    // 添加外层 div 提供浅灰背景 (bg-slate-50)
    <div className="min-h-screen bg-slate-50 py-8 md:py-12">
      {/* 简历主体：白底、阴影、圆角 */}
      <main className="container mx-auto max-w-4xl p-6 md:p-12 bg-white shadow-xl rounded-xl">
        <Header />
        <About />
        <Projects />
        <Education />
      </main>
    </div>
  )
}
