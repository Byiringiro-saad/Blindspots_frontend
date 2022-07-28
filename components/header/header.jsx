import React from "react";

import styles from "./header.module.css";

const Header = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.line}></div>
      <p>{children}</p>
      <div className={styles.line}></div>
    </div>
  );
};

export default Header;
