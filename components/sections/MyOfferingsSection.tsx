import { Pill, PillIndicator } from "@/components/ui/kibo-ui/pill";
import GradientBackground from "../gradient-background";
import BentoGrid from "../mvpblocks/bento-grid-1";
import Underline from "../underline";

export default function MyOfferingsSection() {
  return (
    <section className="py-20 pb-7 px-4 border-b-dark-purple/60 overflow-hidden relative">
      <div className="absolute top-0 right-1/2 flex h-8 items-start overflow-hidden -translate-x-1/2">
        <div className="-mt-px flex h-[2px] w-80 -scale-x-100">
          <div className="w-full flex-none blur-xs [background-image:linear-gradient(90deg,rgba(255,178,0,0)_0%,#FFB200_32.29%,rgba(236,72,153,0.25)_67.19%,rgba(236,72,153,0)_100%)]"></div>
          <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(255,178,0,0)_0%,#FFB200_32.29%,rgba(255,178,0,0.5)_67.19%,rgba(236,72,153,0)_100%)]"></div>
        </div>
      </div>
      <GradientBackground />
      <div className="container-layout">
        <div className="flex-center flex-col">
          <Pill className="mb-8 bg-dark-purple/20 text-white border-[0.2px] border-white/20 font-lora w-fit">
            <PillIndicator pulse variant="section" />
            Services
          </Pill>
          <h2 className="_h2 text-center text-white mb-20">
            My{" "}
            <span className="text-light-purple relative">
              Services
              <Underline className="text-light-purple absolute bottom-0 -right-0 rotate-180 hidden sm:inline-block" />
            </span>
          </h2>
        </div>

        <BentoGrid />
      </div>
    </section>
  );
}
