import { network } from "@/data"
import { DraggableCardBody } from "../ui/draggable-card"
import { Button } from "../ui/button";
import GradientBackground from "../gradient-background";

export default function CollaboratorsNetworkSection() {
  return (
    <section className="py-14 bg-[#050505] sm:rounded-t-[20%] 2xl:rounded-3xl border-t-[0.1px] 2xl:border-[0.1px] border-b-[0.1px] border-light-purple/50 [perspective:3000px] relative min-h-[500px] w-full overflow-clip flex-center 2xl:container-layout">
      <h2 className="_h2 text-white z-[100] absolute top-14 text-center">
        My <span className="text-light-purple">Collaborators Network</span>
      </h2>
      <Button size="lg">Contact Us</Button>
      <GradientBackground />
      {network.map((friend) => (
        <DraggableCardBody style={friend.style} key={friend.name}>
          <img
            src={friend.image}
            alt={friend.name}
            className="rotate-90 pointer-events-none relative z-10 h-24 w-24 object-cover object-center rounded-full border-[0.5px] border-light-purple/70 flex-shrink-0"
          />
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">
              {friend.name}
            </h3>
            <p className="font-hind text-base text-white/70 leading-tight">
              {friend.description}
            </p>
          </div>
        </DraggableCardBody>
      ))}
    </section>
  );
}
