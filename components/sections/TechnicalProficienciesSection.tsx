import { Badge } from "@/components/ui/badge";
import { skills } from "@/data";

export default function TechnicalProficienciesSection() {
  return (
    <section className="py-16 px-4">
      <div className="container-layout">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Technical <span className="text-bright-purple">Proficiencies</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-lg py-2 px-4 border-light-purple text-light-purple hover:bg-light-purple hover:text-dark-purple transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
