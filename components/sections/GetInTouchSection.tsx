import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function GetInTouchSection() {
  return (
    <section className="py-16 px-4">
      <div className="container-layout">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Get In <span className="text-bright-purple">Touch</span>
        </h2>
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/10 border-light-purple/30">
            <CardHeader>
              <CardTitle className="text-center text-light-purple text-2xl">Let's Work Together</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <p className="text-white/90 mb-6">
                  Ready to bring your ideas to life? I'd love to hear about your project.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-bright-purple hover:bg-accent-purple text-white">
                    Send Message
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-light-purple text-light-purple hover:bg-light-purple hover:text-dark-purple bg-transparent"
                  >
                    Schedule Call
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-bright-purple font-semibold">Email</p>
                  <p className="text-white/80">hello@example.com</p>
                </div>
                <div>
                  <p className="text-bright-purple font-semibold">Phone</p>
                  <p className="text-white/80">+1 (555) 123-4567</p>
                </div>
                <div>
                  <p className="text-bright-purple font-semibold">Location</p>
                  <p className="text-white/80">San Francisco, CA</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
