import React from "react";
import Link from "next/link";

// icons
import { AiOutlineShopping, AiOutlineSearch } from "react-icons/ai";

// styles
import styles from "../styles/Layout/Navbar.module.scss";

export default function Navbar() {
  const navLinks = [
    { id: 1, text: "shop" },
    { id: 2, text: "gifts" },
    { id: 3, text: "best sellers" },
    { id: 4, text: "news" },
    { id: 5, text: "packs" },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <Link href="/">
          <div className={styles.navLogo}>STORE</div>
        </Link>

        <ul className={styles.navLinks}>
          {navLinks.map((navLink) => (
            <li key={navLink.id}>{navLink.text}</li>
          ))}
        </ul>

        <ul className={styles.navIcons}>
          <Link href="/Checkout">
            <li>
              <AiOutlineShopping />
            </li>
          </Link>

          <li>
            <AiOutlineSearch />
          </li>
        </ul>
      </div>
    </nav>
  );
}
