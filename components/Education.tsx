import { resumeData } from '@/lib/data'
import { Card, CardContent } from '@/components/ui/card'
import CollapsibleSection from './CollapsibleSection'

export default function Education() {
  const { school, major, time } = resumeData.education

  return (
    <CollapsibleSection title="教育背景">
      <Card>
        <CardContent>
          <div className="flex justify-between items-start">
            <div>
              <p className="font-semibold">{school}</p>
              <p className="text-sm text-gray-600">{major}</p>
            </div>
            <p className="text-sm text-gray-500">{time}</p>
          </div>
        </CardContent>
      </Card>
    </CollapsibleSection>
  )
}
