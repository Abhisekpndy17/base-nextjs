import NavStyle from "../styles/Nav.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={NavStyle.nav}>
      <div className={NavStyle.logo}>
        <Link href="/">Abhishek</Link>
      </div>
      <ul className={NavStyle.navgrid}>
        <li>
          <Link href="/about">About us</Link>
        </li>
        <li>
          <Link href="/article">Blogs</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
