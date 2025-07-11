import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ShowcaseOfWorkSection() {
  return (
    <section className="py-14 flex-center relative">
      <div className="container-layout">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Showcase of <span className="text-bright-purple">My Work</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card
              key={i}
              className="bg-white/10 border-light-purple/30 overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-bright-purple to-accent-purple"></div>
              <CardHeader>
                <CardTitle className="text-light-purple">Project {i}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 mb-4">
                  Brief description of the project and technologies used.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-bright-purple text-bright-purple hover:bg-bright-purple hover:text-white bg-transparent"
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
