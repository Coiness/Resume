import { resumeData } from '@/lib/data'
import { Card, CardContent } from '@/components/ui/card'
import CollapsibleSection from './CollapsibleSection'

export default function About() {
  return (
    <section className="mb-8">
      <CollapsibleSection title="个人优势">
        <Card>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {resumeData.personalStrengths.map((strength, index) => (
                <li key={index}>{strength}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </CollapsibleSection>
    </section>
  )
}
