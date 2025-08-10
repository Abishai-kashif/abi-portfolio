import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/data";
import GradientBackground from "../gradient-background";

export default function MyOfferingsSection() {
  return (
    <section className="pt-20 pb-28 px-4 rounded-b-[20%] border-b border-b-dark-purple/60 overflow-hidden relative">
      <GradientBackground />
      <div className="container-layout">
        <h2 className="_h2 text-center text-white mb-20">
          My <span className="text-light-purple">Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map(({ name, description, icon: Icon }, index) => (
            <Card
              key={index}
              className="border-none shadow-none bg-transparent"
            >
              <CardHeader className="flex items-center gap-3 border-b border-white/50 mb-5 p-5">
                <Icon
                  className="text-light-purple"
                  aria-label={name}
                  size={28}
                />
                <CardTitle className="text-white">{name}</CardTitle>
              </CardHeader>
              <CardContent className="px-2">
                <p className="text-white/80">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
