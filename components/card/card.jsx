import React from "react";
import { MdReviews } from "react-icons/md";

import styles from "./card.module.css";

const Card = ({ card }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>{card?.title}</p>
      </div>
      <div className={styles.down}>
        <p>{card?.language}</p>
        <p>
          <MdReviews className={styles.icon} />
          {card?.reviews} reviews
        </p>
      </div>
    </div>
  );
};

export default Card;
