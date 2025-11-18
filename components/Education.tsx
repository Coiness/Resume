import { resumeData } from '@/lib/data'
import { Card, CardContent } from '@/components/ui/card'

export default function Education() {
  const { school, major, time } = resumeData.education
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 px-4">教育背景</h2>
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
    </section>
  )
}
