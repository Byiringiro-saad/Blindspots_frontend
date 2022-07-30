import React, { useState } from "react";

import styles from "./two_part.module.css";
import Ad from "../../components/ad/ad";
import Card from "../../components/card/card";

const Two_Part = ({ children }) => {
  const [card, setCard] = useState({
    title: "How to get sum and product of all numbers from an array.",
    language: "Python",
    reviews: 12,
  });

  return (
    <div className={styles.container}>
      <div className={styles.left}>{children}</div>
      <div className={styles.right}>
        <p className={styles.header}>Some featured reviews</p>
        <div className={styles.cards}>
          {[...Array(5)].map((x, index) => (
            <Card card={card} key={index} />
          ))}
          <Ad />
        </div>
      </div>
    </div>
  );
};

export default Two_Part;
