import React from "react";
import styles from "./styles.module.css";
import { MenuLinks } from "@/utils/data";
import Image from "next/image";

const Header = () => {
  return (
    <div className={styles.headerContain}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <Image src="/assets/logo.png" width={120} height={120} alt="logo" />
        </div>
        <div className={styles.navLinks}>
          {MenuLinks.map((items, index) => {
            return (
              <a key={index} href={items.href} className={styles.navLink}>
                {items.title}
              </a>
            );
          })}
        </div>
        <div className={styles.donateBtn}>Donate Now</div>
      </div>
    </div>
  );
};

export default Header;
