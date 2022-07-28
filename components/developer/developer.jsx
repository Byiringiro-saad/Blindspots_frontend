import React from "react";
import Image from "next/image";

import { BsGithub, BsLinkedin } from "react-icons/bs";

import styles from "./developer.module.css";

const Developer = ({ developer }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={developer?.image}
          alt={developer?.name}
          width={150}
          height={150}
        />
      </div>
      <p>{developer?.name}</p>
      <div className={styles.socials}>
        <a href={developer?.github} target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
        <a href={developer?.linkedIn} target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Developer;
