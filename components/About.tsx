import { resumeData } from '@/lib/data'
import { Card, CardContent } from '@/components/ui/card'

export default function About() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 px-4">个人优势</h2>
      <Card>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {resumeData.personalStrengths.map((strength, index) => (
              <li key={index}>{strength}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}
