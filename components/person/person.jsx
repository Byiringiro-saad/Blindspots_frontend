import React from "react";
import Image from "next/image";

import styles from "./person.module.css";

const Person = ({ person }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.image}>
          <Image
            src={person?.image}
            width={100}
            height={100}
            alt={person?.name}
          />
        </div>
        <div className={styles.about}>
          <p className={styles.name}>{person?.name}</p>
          <p>{person?.occupation}</p>
        </div>
      </div>
      <div className={styles.content}>
        <p>{person?.review}</p>
      </div>
    </div>
  );
};

export default Person;
