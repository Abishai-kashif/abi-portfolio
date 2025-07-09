import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { milestones } from "@/data"

export default function MilestonesRecognitionsSection() {
  return (
    <section className="py-16 px-4">
      <div className="container-layout">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Milestones & <span className="text-bright-purple">Recognitions</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="bg-white/10 border-light-purple/30">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-bright-purple rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {milestone.year}
                    </div>
                    <CardTitle className="text-light-purple">{milestone.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 ml-20">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
