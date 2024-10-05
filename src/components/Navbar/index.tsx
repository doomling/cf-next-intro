import styles from "./styles.module.css";
import Link from "next/link";

type NavLink = {
  name: string;
  url: string;
};

const links: NavLink[] = [
  { name: "Home", url: "/" },
  { name: "Blog", url: "/blog" },
  { name: "Sobre Mi", url: "/sobre-mi" },
];

export default function Navbar(): JSX.Element {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        {links.map((link, i) => {
          return (
            <Link key={i} href={link.url}>
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
