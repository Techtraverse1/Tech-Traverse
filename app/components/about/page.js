"use client";
import React from "react";
import Link from "next/link";
import styles from "../../components/componenet.module.css";

const About = () => {
  return (
    <div>
      <div className={styles.aboutCont}>
        <h1>About Us</h1>
        <p>
          Welcome to our company's about page! We are a passionate team of
          professionals dedicated to delivering top-notch products and services.
        </p>
        <div className={styles.links}>
          <a><Link href="../components/about/aboutCompany">About Company</Link></a>
          <a><Link href="../components/about/aboutEmployee">About Employee</Link></a>
        </div>
      </div>
    </div>
  );
};

export default About;
