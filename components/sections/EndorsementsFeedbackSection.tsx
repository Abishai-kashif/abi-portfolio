import { Card, CardContent } from "@/components/ui/card"

export default function EndorsementsFeedbackSection() {
  return (
    <section className="py-16 px-4">
      <div className="container-layout">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Client <span className="text-bright-purple">Endorsements</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="bg-white/10 border-light-purple/30">
              <CardContent className="p-6">
                <p className="text-white/90 mb-4">
                  "Outstanding work and exceptional attention to detail. Highly recommended!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-bright-purple rounded-full mr-3"></div>
                  <div>
                    <p className="text-light-purple font-semibold">Client {i}</p>
                    <p className="text-white/60 text-sm">CEO, Company {i}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
