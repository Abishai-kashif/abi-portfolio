import { Button } from "@/components/ui/button"
import { LucideThumbsUp } from "lucide-react";
import arrowDown from "react-useanimations/lib/arrowDown"
import LogoGroupSection from "../LogoGroupSection"
import UseAnimationsWrapper from "../use-animations-wrapper"
import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      <section className="pt-28 pb-10">
        <div className="container-layout section-padding">
          <div
            className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px] pointer-events-none"
            style={{
              background: `radial-gradient(circle at center, #ac6bbe, transparent 70%)`,
            }}
          />
          <div
            className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full opacity-10 blur-[100px] pointer-events-none"
            style={{
              background: `radial-gradient(circle at center, #ac6bbe, transparent 70%)`,
            }}
          />
          <div className="text-center">
            {/* clear cta heading */}
            <h1 className="_h1 md:mt-8 lg:mt-10 inline-block mb-7 [&_*]:bg-clip-text [&_*]:text-transparent [&_*]:[background-image:-webkit-linear-gradient(90deg,#ececec_0%,#aaaaaa_33%,#e0e0e0_67%)] [&_strong]:[background-image:-webkit-linear-gradient(90deg,#ac6bbe_0%,#4e1f61_33%,#ac6bbe_67%)] [&_strong_span]:[background-image:-webkit-linear-gradient(90deg,#ac6bbe_0%,#4e1f61_33%,#ac6bbe_67%)]">
              <span>I BUILD LUXURY</span>{" "}
              <strong className="text-light-purple">
                WEB & <span className="text-nowrap">AI-DRIVEN</span>{" "}
                APPLICATIONS
              </strong>
            </h1>

            {/* paragraph */}
            <div className="_p mb-8 max-w-2xl mx-auto capitalize">
              I&rsquo;ve honed my craft in full-stack development, AI-driven
              applications, and everything in between
              <UseAnimationsWrapper
                animation={arrowDown}
                size={23}
                strokeColor="#fff"
                className="inline-block relative top-[4px] opacity-70 lg:text-4xl"
              />
            </div>

            {/* buttons */}
            <div className="flex-center flex-wrap gap-x-7 gap-y-3">
              <Button size="lg" variant="outline" asChild>
                <Link href="#work">View My Work</Link>
              </Button>
              <Button size="lg" className="group text-white/90" asChild>
                <Link href="#contact">
                  Get In Touch{" "}
                  <LucideThumbsUp
                    className="group-hover:rotate-[-15deg] transition-all duration-300"
                    size={50}
                  />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-14">
          <LogoGroupSection />
        </div>
      </section>
    </>
  );
}
