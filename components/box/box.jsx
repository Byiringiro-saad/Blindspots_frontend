import React from "react";
import { useRouter } from "next/router";
import { EditorView } from "codemirror";

import { MdReviews } from "react-icons/md";

import styles from "./box.module.css";
import { parseIfJson } from "../../features/parsetJson";

const Box = ({ review }) => {
  const router = useRouter();

  console.log(review);

  const goToReview = () => {
    router.push(`/explore/${review?.id}`);
  };

  return (
    <div className={styles.container} onClick={goToReview}>
      <div className={styles.top}>
        <div className={styles.language}>
          <p>{review?.language}</p>
        </div>
        <div className={styles.desc}>
          {review?.title?.length > 50 ? (
            <p>{review?.title?.substr(0, 50)}...</p>
          ) : (
            <p>{review?.title}</p>
          )}
        </div>
      </div>
      <div className={styles.codes}></div>
      <div className={styles.bottom}>
        <MdReviews className={styles.icon} />
        <p>{review?.comments[0] || 0} Reviews</p>
      </div>
    </div>
  );
};

export default Box;
