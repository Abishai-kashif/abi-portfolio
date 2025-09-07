import Image from "next/image";
import Link from "next/link";

function MainLogo() {
  return (
    <Link
      href={"/"}
      className="size-12 flex-center overflow-hidden"
      aria-label="Home"
    >
      <Image
        src="/logo.svg"
        alt="logo"
        width={50}
        height={50}
        className="size-full object-contain object-center"
      />
    </Link>
  );
}

export default MainLogo;
