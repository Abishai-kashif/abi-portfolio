import { network } from "@/data"
import { DraggableCardBody } from "../ui/draggable-card"

export default function CollaboratorsNetworkSection() {
  return (
    <section className="py-14 bg-[#050505] rounded-t-[20%] border-t-[0.1px] border-b-[0.1px] border-light-purple/50 [perspective:3000px] relative min-h-[500px] w-full overflow-clip flex-center">
      <h2 className="_h2 text-white z-[100] absolute top-14">
        My <span className="text-light-purple">Collaborators Network</span>
      </h2>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-purple/50 z-[-2]" />
      {
        network.map((friend) => (
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
        ))
      }
    </section>
  )
}
