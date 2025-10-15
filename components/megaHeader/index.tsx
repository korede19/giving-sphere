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
          {/* About Dropdown */}
          <div
            className={styles.navItem}
            onMouseEnter={() => setOpenDropdown("about")}
            onMouseLeave={closeDropdowns}
          >
            <button className={styles.navLink}>
              {navItems.about.title}
              <span className={styles.arrow}>▼</span>
            </button>

            {openDropdown === "about" && (
              <div className={styles.megaDropdown}>
                <div className={styles.megaContent}>
                  {navItems.about.sections.map((section, idx) => (
                    <div key={idx} className={styles.megaColumn}>
                      <h3 className={styles.columnHeading}>
                        {section.heading}
                      </h3>
                      <ul className={styles.dropdownList}>
                        {section.links.map((link, linkIdx) => (
                          <li key={linkIdx}>
                            <a
                              href={link.href}
                              className={styles.dropdownLink}
                              target={link.external ? "_blank" : "_self"}
                              rel={link.external ? "noopener noreferrer" : ""}
                            >
                              {link.text}
                              {link.external && (
                                <span className={styles.externalIcon}>↗</span>
                              )}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  <div className={styles.megaHighlight}>
                    <div className={styles.highlightImage}>
                      <Image
                        src="/assets/hero3.jpg"
                        alt="Giving Sphere Story"
                        width={100}
                        height={100}
                        className={styles.image}
                      />
                    </div>
                    <h4 className={styles.highlightTitle}>
                      Giving Sphere&apos;s Story
                    </h4>
                    <p className={styles.highlightQuote}>
                      70% of healthcare costs are paid out-of-pocket, pushing
                      millions into poverty (WHO). In 2024, according to a
                      development update report by the World Bank Group (WBG),
                      the poverty rate increased to 56%, representing about 129
                      million people.
                    </p>
                    <p className={styles.highlightAuthor}>— Giving Sphere</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className={styles.navItem}>
            <Link href="/our-work" className={styles.navLink}>
              OUR WORK
            </Link>
            <Link href="/news&resources" className={styles.navLink}>
              NEWS & RESOURCES
            </Link>
          </div>
          {/* Other Navigation Items with Simple Dropdowns */}
          {(["getInvolved"] as const).map((key) => (
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
                        <h4 className={styles.linkHead}>{link.text}</h4>
                        <p>{link.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
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
