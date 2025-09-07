import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { milestones } from "@/data";
import GradientBackground from "../gradient-background";

export default function MilestonesRecognitionsSection() {
  return (
    <section className="py-24 px-4 relative">
      <div
        className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
        style={{
          background: `radial-gradient(circle at center, #ac6bbe, transparent 70%)`,
        }}
      />
      <div className="absolute top-0 left-2/3 flex h-8 items-start overflow-hidden -translate-x-1/2">
        <div className="-mt-px flex h-[2px] w-80 -scale-x-100">
          <div className="w-full flex-none blur-xs [background-image:linear-gradient(90deg,rgba(255,178,0,0)_0%,#FFB200_32.29%,rgba(236,72,153,0.25)_67.19%,rgba(236,72,153,0)_100%)]"></div>
          <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(255,178,0,0)_0%,#FFB200_32.29%,rgba(255,178,0,0.5)_67.19%,rgba(236,72,153,0)_100%)]"></div>
        </div>
      </div>
      <div className="container-layout">
        <h2 className="_h2 text-center text-white mb-24">
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
