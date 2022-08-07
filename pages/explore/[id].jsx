import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";

import { MdReviews } from "react-icons/md";

import { parseIfJson } from "../../features/parsetJson";
import Nav from "../../components/nav/nav";
import styles from "../../styles/Review.module.css";
import Footer from "../../components/footer/footer";
import Two_Part from "../../layouts/two-part/two_part";
import { useRouter } from "next/router";

const CodeEditor = dynamic(
  () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
  { ssr: false }
);

const Review = () => {
  const { query } = useRouter();
  const [review, setReview] = useState({});

  useEffect(() => {
    axios.post("/api/review", { id: query.id }).then((res) => {
      console.log(res.data);
      if (res.data.id) {
        setReview(res.data);
      }
    });
  }, []);

  const handleOnChange = () => {
    console.log("saad");
  };

  return (
    <div className={styles.container}>
      <Nav color="393939" />
      <Two_Part>
        <div className={styles.content}>
          <div className={styles.top}>
            <p className={styles.gray}>
              <MdReviews /> {review?.comments?.length} Reviews
            </p>
            <p className={styles.title}>{review?.title}.</p>
            <div className={styles.btm}>
              <p className={styles.gray}>
                Click on any line to add a review/comment
              </p>
              <div className={styles.form}>
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox">
                  Turn reviews off (View only code)
                </label>
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.top}>
              <p>{review?.language}</p>
            </div>
            <div className={styles.area}>
              <CodeEditor
                value={parseIfJson(review?.text)}
                language={`${review?.language}`}
                placeholder="Write your code here!"
                padding={15}
                onChange={handleOnChange}
                style={{
                  background: "#F9F9F9",
                  width: "100%",
                  height: "100%",
                  border: "1px solid var(--gray)",
                  borderRadius: "5px",
                  overflowY: "scroll",
                  margin: "10px 0",
                }}
              />
            </div>
          </div>
        </div>
      </Two_Part>
      <Footer />
    </div>
  );
};

export default Review;
