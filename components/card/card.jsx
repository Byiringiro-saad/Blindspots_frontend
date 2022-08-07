import { useRouter } from "next/router";
import React from "react";
import { MdReviews } from "react-icons/md";

import styles from "./card.module.css";

const Card = ({ card }) => {
  const router = useRouter();

  const goToReview = () => {
    router.push(`/explore/${card?.id}`);
  };

  return (
    <div className={styles.container} onClick={goToReview}>
      <div className={styles.header}>
        <p>{card?.title}</p>
      </div>
      <div className={styles.down}>
        <p>{card?.language}</p>
        <p>
          <MdReviews className={styles.icon} />
          {card?.comments[0] || 0} Reviews
        </p>
      </div>
    </div>
  );
};

export default Card;
