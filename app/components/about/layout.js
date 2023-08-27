"use client";
import styles from "../navBar/navBar.module.css";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
  const pathName = usePathname();

  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.navLogo}>
          <h4>
            <Link href="/">Tech Traverse</Link>
          </h4>
        </div>

        <ul className={styles.navList}>
          {pathName !== "/components/about" ? (
            <li className={styles.navItem}>
              <Link href="/components/about">Main About</Link>
            </li>
          ) : (
            <li className={styles.navItem}>
              <Link href="/">Home</Link>
            </li>
          )}

          <li className={styles.navItem}>
            <Link href="/components/about/aboutCompany">About Company</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/components/about/aboutEmployee">About Employee</Link>
          </li>
        </ul>
      </nav>

      {children}
    </div>
  );
};

export default Layout;
