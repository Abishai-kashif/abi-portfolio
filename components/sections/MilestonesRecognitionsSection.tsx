import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { milestones } from "@/data"
import GradientBackground from "../gradient-background";

export default function MilestonesRecognitionsSection() {
  return (
    <section className="py-24 px-4">
      <div className="container-layout">
        <h2 className="_h2 text-center text-white mb-20">
          Milestones & <span className="text-light-purple">Recognitions</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <Card
                key={index}
                className="bg-transparent border-none shadow-none"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center text-white/90 font-bold text-lg relative overflow-hidden">
                      <GradientBackground />
                      {milestone.year}
                    </div>
                    <CardTitle className="_h3">{milestone.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 ml-20 _p">
                    {milestone.description}
                  </p>
                </CardContent>
                <div className="border-b-[0.1px] border-light-purple/30 shadow-md rounded-full shadow-light-purple/[0.6] h-[2.4px] mt-5" />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
