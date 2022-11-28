import Link from "next/link";
import Image from "next/image";
import style from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" alt="" width={150} height={85} />
      </div>
      <div className={style.navbarItems}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/hackers">Hacker Listing</Link>
      </div>
    </nav>
  );
};

export default Navbar;
