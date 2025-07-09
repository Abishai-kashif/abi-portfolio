import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { offerings } from "@/data";

export default function MyOfferingsSection() {
  return (
    <section className="py-16 px-4 bg-white/5 backdrop-blur-sm">
      <div className="container-layout">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          My <span className="text-bright-purple">Offerings</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerings.map((offering, index) => (
            <Card key={index} className="bg-white/10 border-light-purple/30 text-center">
              <CardHeader>
                <div className="text-4xl mb-4">{offering.icon}</div>
                <CardTitle className="text-light-purple">{offering.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">{offering.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
