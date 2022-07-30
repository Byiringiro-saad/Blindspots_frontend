import React, { useState } from "react";
// import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

import Nav from "../components/nav/nav";
import Footer from "../components/footer/footer";
import styles from "../styles/Explore.module.css";
import Box from "../components/box/box";

const Explore = () => {
  const [languages, setLanguages] = useState([
    {
      name: "Clicke",
      reviews: 3,
    },
    {
      name: "Javascript",
      reviews: 8,
    },
    {
      name: "Java",
      reviews: 4,
    },
    {
      name: "Python",
      reviews: 9,
    },
    {
      name: "MySql",
      reviews: 3,
    },
    {
      name: "C",
      reviews: 2,
    },
    {
      name: "C++",
      reviews: 1,
    },
    {
      name: "MySql",
      reviews: 10,
    },
  ]);

  const [review, setReview] = useState({
    language: "Python",
    description:
      "How to add two numbers and find their product, quotient, sum and difference",
    reviews: 12,
  });

  return (
    <div className={styles.container}>
      <Nav color="393939" />
      <div className={styles.content}>
        <div className={styles.top}>
          <p>
            <span>58 </span>
            Featured reviews
          </p>
          <div className={styles.languages}>
            {/* <AiOutlineLeft className={styles.icon} /> */}
            <div className={styles.all}>
              <div
                className={styles.box}
                style={{ background: "var(--blue)", color: "var(--white)" }}
              >
                <p>All</p>
              </div>
              {languages.map((langauge, index) => (
                <div className={styles.box}>
                  <p>{langauge?.name}</p>
                  <p>{langauge?.reviews}</p>
                </div>
              ))}
            </div>
            {/* <AiOutlineRight className={styles.icon} /> */}
          </div>
        </div>
        <div className={styles.reviews}>
          {[...Array(10)].map((r, index) => (
            <Box review={review} key={index} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Explore;
