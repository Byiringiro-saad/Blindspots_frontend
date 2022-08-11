import React from "react";
import { useRouter } from "next/router";
import { MdReviews } from "react-icons/md";

import Editor from "@monaco-editor/react";

import { parseIfJson } from "../../features/parsetJson";

import styles from "./box.module.css";

const Box = ({ review }) => {
  const router = useRouter();

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
      <div className={styles.codes}>
        <Editor
          height={`100%`}
          width={`100%`}
          language={review?.language}
          value={parseIfJson(review?.text)}
          theme={{ value: "oceanic-next", label: "Oceanic Next" }}
          defaultValue="// some comment"
          onChange={null}
          options={{
            readOnly: true,
            lineNumbers: false,
            minimap: { enabled: false },
            scrollbar: {
              vertical: "hidden",
              horizontal: "hidden",
              handleMouseWheel: null,
            },
            wordWrap: "on",
            fontSize: "12px",
          }}
        />
      </div>
      <div className={styles.bottom}>
        <MdReviews className={styles.icon} />
        <p>{review?.comments[0] || 0} Reviews</p>
      </div>
    </div>
  );
};

export default Box;
