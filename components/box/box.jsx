import React from "react";
import { MdReviews } from "react-icons/md";

import styles from "./box.module.css";

const Box = ({ review }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.language}>
          <p>{review?.language}</p>
        </div>
        <div className={styles.desc}>
          <p>{review?.description.substr(0, 30)}...</p>
        </div>
      </div>
      <div className={styles.codes}></div>
      <div className={styles.bottom}>
        <MdReviews className={styles.icon} />
        <p>{review?.reviews} Reviews</p>
      </div>
    </div>
  );
};

export default Box;
