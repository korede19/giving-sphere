"use client";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { navItems } from "@/utils/data";
import Image from "next/image";
import DonateModal from "../popup";

interface NavLink {
  href: string;
  text: string;
  external?: boolean;
  description?: string;
}

export default function MegaHeader() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const closeDropdowns = () => {
    setOpenDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenMobileDropdown(null);
  };

  const toggleMobileDropdown = (key: string) => {
    setOpenMobileDropdown(openMobileDropdown === key ? null : key);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <Image
              src={"/assets/logo.png"}
              alt="Logo"
              width={120}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
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
          <DonateModal />
        </div>

        {/* Hamburger Menu Button */}
        <button
          className={styles.hamburger}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`${styles.hamburgerLine} ${
              isMobileMenuOpen ? styles.open : ""
            }`}
          ></span>
          <span
            className={`${styles.hamburgerLine} ${
              isMobileMenuOpen ? styles.open : ""
            }`}
          ></span>
          <span
            className={`${styles.hamburgerLine} ${
              isMobileMenuOpen ? styles.open : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${
          isMobileMenuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <nav className={styles.mobileNav}>
          {(["about", "getInvolved", "ourWork"] as const).map((key) => (
            <div key={key} className={styles.mobileNavItem}>
              <button
                className={styles.mobileNavLink}
                onClick={() => toggleMobileDropdown(key)}
              >
                <Link href={navItems[key].link} onClick={toggleMobileMenu}>
                  {navItems[key].title}
                </Link>
                <span
                  className={`${styles.mobileArrow} ${
                    openMobileDropdown === key ? styles.mobileArrowOpen : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {openMobileDropdown === key && (
                <ul className={styles.mobileDropdownList}>
                  {navItems[key].links.map((link: NavLink, idx: number) => (
                    <li key={idx}>
                      <Link
                        href={link.href}
                        onClick={toggleMobileMenu}
                        className={styles.mobileDropdownLink}
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className={styles.mobileNavItem}>
            <Link
              href="/news&updates"
              className={styles.mobileNavLink}
              onClick={toggleMobileMenu}
            >
              NEWS & UPDATES
            </Link>
          </div>

          <div className={styles.mobileDonateWrapper}>
            <DonateModal />
          </div>
        </nav>
      </div>
    </header>
  );
}
