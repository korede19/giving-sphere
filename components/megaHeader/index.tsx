"use client";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { navItems } from "@/utils/data";
import Image from "next/image";

interface NavLink {
  href: string;
  text: string;
  external?: boolean;
  description?: string;
}

export default function MegaHeader() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeDropdowns = () => {
    setOpenDropdown(null);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src={"/assets/logo.png"}
              alt="Logo"
              width={120}
              height={40}
              priority
            />
          </Link>
        </div>

        <nav className={styles.nav}>
          {(["about", "getInvolved", "ourWork"] as const).map((key) => (
            <div
              key={key}
              className={styles.navItem}
              onMouseEnter={() => setOpenDropdown(key)}
              onMouseLeave={closeDropdowns}
            >
              <button className={styles.navLink}>
                <Link href={navItems[key].link}>{navItems[key].title}</Link>
                <span className={styles.arrow}>▼</span>
              </button>

              {openDropdown === key && (
                <div className={styles.dropdown}>
                  <ul className={styles.dropdownList}>
                    {navItems[key].links.map((link: NavLink, idx: number) => (
                      <li key={idx} className={styles.otherItems}>
                        <Link href={link.href}>{link.text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
          <div className={styles.navItem}>
            <Link href="/news&updates" className={styles.navLink}>
              NEWS & UPDATES
            </Link>
          </div>
        </nav>

        <div className={styles.actions}>
          <a href="/donate" className={styles.donateButton}>
            DONATE
          </a>
        </div>
      </div>
    </header>
  );
}
