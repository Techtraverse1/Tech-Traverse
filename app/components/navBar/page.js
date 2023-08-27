"use client";
import styles from "../navBar/navBar.module.css";
import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLogo}>
        <h4>
          <Link href="/">Tech Traverse</Link>
        </h4>
      </div>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a>
            <Link href="/">Home</Link>
          </a>
        </li>
        <li className={styles.navItem}>
          <a>
            <Link href="../components/about">About</Link>
          </a>
        </li>
        <li className={styles.navItem}>
          <a>
            <Link href="/components/services">Services</Link>
          </a>
        </li>
        <li className={styles.navItem}>
          <a>
            <Link href="/contact">Contact</Link>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
