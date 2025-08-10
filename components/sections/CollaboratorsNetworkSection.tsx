import { CardStackDemo } from "../card-stack-demo";
import GradientBackground from "../gradient-background";
import Underline from "../underline";
import { Pill, PillIndicator } from "@/components/ui/kibo-ui/pill";

export default function CollaboratorsNetworkSection() {
  return (
    <section className="section-padding pb-12 bg-[#050505] [perspective:3000px] relative w-full overflow-clip">
      <div className="flex flex-col lg:flex-row md:items-center justify-center md:justify-between 2xl:container-layout">
        <div className="w-[100%] lg:w-[50%] mt-12 lg:mt-0">
          <Pill className="mb-8 bg-dark-purple/20 text-white border-[0.2px] border-white/20 font-lora mx-auto">
            <PillIndicator pulse variant="section" />
            Feedback
          </Pill>
          <h2 className="_h2 text-white leading-[1.2] text-center lg:text-left">
            What my{" "}
            <span className="text-light-purple relative">
              Collaborators
              <Underline className="hidden md:inline absolute bottom-0" />
            </span>{" "}
            think about me
          </h2>
        </div>
        <CardStackDemo />
      </div>
      <GradientBackground />
    </section>
  );
}
