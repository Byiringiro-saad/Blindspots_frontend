import React from "react";
import { useRouter } from "next/router";

import Logo from "../logo/logo";
import styles from "./footer.module.css";

const Footer = () => {
  const router = useRouter();

  const goToLanguage = (e) => {
    router.push(`/explore?lan=${e.target.innerHTML.toLowerCase()}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Logo />
      </div>
      <div className={styles.right}>
        <div className={styles.column}>
          <p className={styles.header}>Code Reviews</p>
          <ul>
            <li onClick={goToLanguage}>Java</li>
            <l onClick={goToLanguage} i>
              Python
            </l>
            <li onClick={goToLanguage}>Ruby</li>
            <li onClick={goToLanguage}>Javascript</li>
            <li onClick={goToLanguage}>C/C++</li>
            <li onClick={goToLanguage}>Rust</li>
            <li onClick={goToLanguage}>Typescript</li>
            <li onClick={goToLanguage}>Go</li>
            <li onClick={goToLanguage}>Julia</li>
            <li onClick={goToLanguage}>Swift</li>
            <li onClick={goToLanguage}>Kotlin</li>
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
