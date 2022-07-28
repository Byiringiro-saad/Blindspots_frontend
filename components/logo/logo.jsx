import React from "react";
import { useRouter } from "next/router";

import styles from "./logo.module.css";

const Logo = ({ color }) => {
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };

  return (
    <p className={styles.logo} style={{ color: `#${color}` }} onClick={goHome}>
      Coding<span>Blind</span>Spots
    </p>
  );
};

export default Logo;
