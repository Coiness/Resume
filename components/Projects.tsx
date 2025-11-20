import { resumeData } from '@/lib/data'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import CollapsibleSection from './CollapsibleSection'

export default function Projects() {
  return (
    <section className="mb-8">
      <CollapsibleSection title="项目经历">
        <div className="space-y-6">
          {resumeData.projectExpericen.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <span>{project.title}</span>
                  <div className="flex gap-2 mt-2 md:mt-0">
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
      </CollapsibleSection>
    </section>
  )
}
