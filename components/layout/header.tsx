import MainLogo from "./main-logo";
import NavLinks from "./nav-links";

function Header() {
  return (
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full text-white z-50 bg-transparent border-b-[0.5px] border-white/20 backdrop-blur  px-2 md:px-12 lg:px-32 py-4 transition-all duration-300">
        <div className="container-layout">
            <div className="flex-between flex-wrap">
                <MainLogo />
                <NavLinks/>
            </div>
        </div>
    </header>
  )
}

export default Header;
