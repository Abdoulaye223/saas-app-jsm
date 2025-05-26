import Link from "next/link";
import Image from "next/image";
import NavItems from "../Navitems";


const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image src="/images/logo.svg" alt="Logo" width={46} height={44} />
        </div>
      </Link>
      <div className="flex items-center gap-8">
        <NavItems />
        <p>Sing In</p>
      </div>
    </nav>
  );
};

export default Navbar;
// This is a simple Navbar component that can be used in your application.
