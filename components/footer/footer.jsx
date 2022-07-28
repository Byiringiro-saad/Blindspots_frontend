import React from "react";

import Logo from "../logo/logo";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Logo />
      </div>
      <div className={styles.right}>
        <div className={styles.column}>
          <p className={styles.header}>Code Reviews</p>
          <ul>
            <li>Java</li>
            <li>Python</li>
            <li>Ruby</li>
            <li>Javascript</li>
            <li>C/C++</li>
            <li>Rust</li>
            <li>Typescript</li>
            <li>Go</li>
            <li>Julia</li>
            <li>Swift</li>
            <li>Kotlin</li>
          </ul>
        </div>
        <div className={styles.column}>
          <p className={styles.header}>Resources</p>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Interview</li>
          </ul>
        </div>
        <div className={styles.column}>
          <p className={styles.header}>Follow us</p>
          <ul>
            <li>LinkedIn</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
