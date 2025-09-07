import MainLogo from "./main-logo";
import NavLinks from "./nav-links";

function Header() {
  return (
    <header className="fixed top-3 left-1/2 transform -translate-x-1/2 w-full text-white z-50 bg-transparent border-[0.5px] border-white/20 backdrop-blur px-5 md:px-8 py-1 transition-all duration-300 max-w-5xl rounded-3xl">
      <div className="flex-between flex-wrap">
        <MainLogo />
        <NavLinks />
      </div>
    </header>
  );
}

export default Header;
