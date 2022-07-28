import React from "react";

import styles from "./language.module.css";

const Language = ({ children, bottom, left, size }) => {
  return (
    <div
      className={styles.container}
      style={{
        bottom: `${bottom}px`,
        left: `${left}px`,
        fontSize: `${size}em`,
      }}
    >
      {children}
    </div>
  );
};

export default Language;
