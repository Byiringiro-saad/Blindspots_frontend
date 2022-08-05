import React from "react";
import dynamic from "next/dynamic";

import { MdReviews } from "react-icons/md";

import { parseIfJson } from "../../features/parsetJson";
import styles from "./box.module.css";

const CodeEditor = dynamic(
  () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
  { ssr: false }
);

const Box = ({ review }) => {
  return (
    <div className={styles.container}>
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
        <CodeEditor
          value={parseIfJson(review?.text)}
          language={
            review?.language == "javascript" ? "js" : `${review?.language}`
          }
          padding={15}
          style={{
            background: "#F9F9F9",
            width: "100%",
            height: "100%",
            borderRadius: "5px",
            overflowY: "hidden",
          }}
          disabled={true}
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
