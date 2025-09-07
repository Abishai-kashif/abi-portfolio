import LogoGroupSection from "../LogoGroupSection";
import Underline from "../underline";

export default function TechnicalProficienciesSection() {
  return (
    <section
      className="2xl:container-layout min-h-[300px] relative mt-14"
      id="skills"
    >
      <h2 className="_h2 text-center text-white">
        Technical{" "}
        <span className="text-light-purple relative">
          Proficiencies
          <Underline className="text-light-purple absolute bottom-0 left-0 hidden sm:inline-block" />
        </span>
      </h2>

      <div className="md:mt-20 mt-10">
        <LogoGroupSection />
      </div>
      <div className="absolute left-0 top-0 w-[20%] h-full bg-dark-purple/10 z-40 backdrop-blur-sm rounded-r-full hidden md:block shadow-xl shadow-accent/30" />
    </section>
  );
}
