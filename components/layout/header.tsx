import MainLogo from "./main-logo";
import NavLinks from "./nav-links";
import dynamic from "next/dynamic";

const SparklesCore = dynamic(
  () => import("@/components/ui/sparkles").then((mod) => mod.SparklesCore),
  { loading: () => <div className="absolute inset-0 top-0 pointer-events-none" /> }
);

function Header() {
  return (
    <header className="fixed top-3 left-1/2 transform -translate-x-1/2 w-full text-white z-50 bg-transparent border-[0.5px] border-white/20 backdrop-blur px-5 md:px-8 py-1 transition-all duration-300 max-w-[1184px] rounded-3xl overflow-hidden">
      <SparklesCore
        id="tsparticles3"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={300}
        className="absolute inset-0 top-0 pointer-events-none"
        particleColor="#ac6bbe"
      />
      <div className="flex-between flex-wrap">
        <MainLogo />
        <NavLinks />
      </div>
    </header>
  );
}

export default Header;
