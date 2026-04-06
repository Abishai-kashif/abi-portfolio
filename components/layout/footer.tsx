import GradientBackground from "../gradient-background";
import dynamic from "next/dynamic";
import MainLogo from "./main-logo";
import { socialLinks } from "@/data";

const SparklesCore = dynamic(
  () => import("@/components/ui/sparkles").then((mod) => mod.SparklesCore),
  { loading: () => <div className="absolute inset-0 top-0 pointer-events-none" /> }
);

function Footer() {
  return (
    <div className="mt-10">
      <footer className="min-h-[300px] max-w-[1184px] mx-auto rounded-t-3xl container-layout pt-10 pb-4 transition-all duration-300 text-white border-[0.1px] border-light-purple/80 relative bg-[#050505] overflow-hidden">
        <GradientBackground className="z-10" />
        <SparklesCore
          id="tsparticles2"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={300}
          className="absolute inset-0 top-0 pointer-events-none"
          particleColor="#ac6bbe"
        />
        <div className="flex flex-col justify-between min-h-[280px] text-center sm:text-left">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:pr-20 gap-10">
            <div className="flex flex-col gap-2">
              <MainLogo />
            </div>
            <div className="flex flex-col gap-5">
              <div className="font-bold">Quick links</div>
              <a href="#work" className="text-sm hover:underline">
                Work
              </a>
              <a href="#skills" className="text-sm hover:underline">
                Skills
              </a>
              <a href="#contact" className="text-sm hover:underline">
                Contact
              </a>
            </div>
            <div className="flex flex-col gap-5">
              <div className="font-bold">Social media</div>
              {socialLinks.slice(0, 3).map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-sm hover:underline"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
          <p className="text-sm mt-14">
            All rights reserved © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
