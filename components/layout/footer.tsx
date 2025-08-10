import Grid from "../grid";

function Footer() {
  return (
    <div className="bg-dark-purple/20 text-white/60 border-t-[0.5px] border-white/20 relative">
      <Grid className="absolute inset-0 w-full h-full opacity-40 z-[-2]" />
      <footer className="h-[68px] container-layout flex-between px-2 md:px-12 lg:px-32 py-4 transition-all duration-300">
        <div></div>
        <div>All rights researved ©</div>
      </footer>
    </div>
  );
}

export default Footer;
