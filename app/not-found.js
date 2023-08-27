"use client";
import styles from "./page.module.css";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Oops, Page Not Found!</h1>
        <p>The page you're looking for doesn't exist.</p>
        <div className={styles.links}>
          <Link href="/" className={styles.homeLink}>
            Go to Home Page
          </Link>
          <Link href="/" className={styles.prevLink}>
            Go to Previous Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
