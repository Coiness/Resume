import { resumeData } from '@/lib/data'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function Projects() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 px-4">项目经验</h2>
      <div className="space-y-6">
        {resumeData.projectExpericen.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{project.title}</span>
                <div className="flex gap-2">
                  {project.subtitle.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardTitle>
            </CardHeader>
            <CardDescription>{project.description}</CardDescription>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                {project.feature.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
