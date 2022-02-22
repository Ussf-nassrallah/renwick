import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import Logo from "../Assets/logo.png";

// icons
import { AiOutlineShopping, AiOutlineSearch } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

// styles
import styles from "../styles/Layout/Navbar.module.scss";

export default function Navbar({ input, setInput }) {
    const cartItems = useSelector((state) => state.cart);

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
                <div className="hide-for-desktop">
                    <FaBars className="bars-icon" />
                </div>

                <Link href="/">
                    <div className={styles.navLogo}>
                        <Image src={Logo} objectFit="contain" />
                    </div>
                </Link>

                <ul className={`${styles.navLinks} hide-for-mobile`}>
                    {navLinks.map((navLink) => (
                        <li key={navLink.id}>{navLink.text}</li>
                    ))}
                </ul>

                <ul className={styles.navIcons}>
                    <Link href="/Checkout">
                        <li>
                            <AiOutlineShopping />
                            <span>{cartItems.length}</span>
                        </li>
                    </Link>

                    <li onClick={() => setInput(true)}>
                        <AiOutlineSearch />
                    </li>
                </ul>
            </div>
        </nav>
    );
}
