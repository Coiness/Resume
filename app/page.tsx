import Header from '@/components/Header'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Education from '@/components/Education'

export default function Home() {
  return (
    <main className="container mx-auto max-w-4xl p-4 md:p-8">
      <Header />
      <About />
      <Projects />
      <Education />
    </main>
  )
}
