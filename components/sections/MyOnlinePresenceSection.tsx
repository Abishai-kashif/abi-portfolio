import { Button } from "@/components/ui/button";
import { socialLinks } from "@/data";

export default function MyOnlinePresenceSection() {
  return (
    <section className="py-16 px-4 bg-white/5 backdrop-blur-sm">
      <div className="container-layout">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          My Online <span className="text-bright-purple">Presence</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-light-purple text-lg mb-8">Connect with me across various platforms</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {socialLinks.map((link, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-20 flex-col border-light-purple/30 text-light-purple hover:bg-light-purple hover:text-dark-purple transition-colors bg-transparent"
              >
                <span className="text-2xl mb-1">{link.icon}</span>
                <span className="text-sm">{link.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
