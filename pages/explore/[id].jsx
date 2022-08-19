import axios from "axios";
import { useRouter } from "next/router";
import Editor from "@monaco-editor/react";
import {} from "monaco-editor";
import ReactPlaceholder from "react-placeholder";
import React, { useEffect, useState } from "react";

import { MdReviews } from "react-icons/md";

import Nav from "../../components/nav/nav";
import styles from "../../styles/Review.module.css";
import Footer from "../../components/footer/footer";
import Two_Part from "../../layouts/two-part/two_part";
import InputWidget from "../../components/input/input";
import { parseIfJson } from "../../features/parsetJson";
import { addCommentLineWidget } from "../../components/comment/comment";

const Review = () => {
  const { query } = useRouter();
  const [review, setReview] = useState({});
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isToggle, setIsToggle] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.post("/api/review", { id: query?.id }).then((res) => {
      setLoading(false);
      setReview(res.data);
    });
  }, [query]);

  useEffect(() => {
    setLoading(true);
    axios.post("/api/comment", { id: query?.id }).then((res) => {
      setLoading(false);
      setComments(res.data);
    });
  }, [query]);

  const createCommentWidgets = (cm) => {
    console.log(cm);
    // comments?.forEach((comment) => addCommentLineWidget(cm, comment));
  };

  return (
    <div className={styles.container}>
      <Nav color="393939" />
      <Two_Part>
        <div className={styles.content}>
          <div className={styles.top}>
            {loading ? (
              <ReactPlaceholder
                ready={!loading}
                showLoadingAnimation={true}
                type="rect"
                style={{
                  width: "300px",
                  height: "25px",
                }}
              />
            ) : (
              <p className={styles.gray}>
                <MdReviews className={styles.icon} /> {review.comments?.length}
                <span> </span> Reviews
              </p>
            )}
            {loading ? (
              <ReactPlaceholder
                ready={!loading}
                showLoadingAnimation={true}
                type="rect"
                style={{
                  width: "100%",
                  height: "25px",
                  margin: "5px 0",
                }}
              />
            ) : (
              <p className={styles.title}>{review?.title}.</p>
            )}
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
              {loading ? (
                <ReactPlaceholder
                  ready={!loading}
                  showLoadingAnimation={true}
                  type="rect"
                  style={{
                    width: "100%",
                    height: "25px",
                    margin: "5px 0",
                  }}
                />
              ) : (
                <p>{review?.language}</p>
              )}
            </div>
            <div className={styles.area}>
              {loading ? (
                <ReactPlaceholder
                  ready={!loading}
                  showLoadingAnimation={true}
                  type="rect"
                  style={{
                    width: "100%",
                    height: "900px",
                  }}
                />
              ) : (
                <Editor
                  height={`100%`}
                  width={`100%`}
                  language={review?.language}
                  value={parseIfJson(review?.text)}
                  theme="vs-light"
                  defaultValue="// some comment"
                  onChange={null}
                  onMount={
                    !isToggle
                      ? (cm) => setTimeout(() => createCommentWidgets(cm), 0)
                      : () => {}
                  }
                  options={{
                    readOnly: true,
                    lineNumbers: true,
                    minimap: { enabled: false },
                    scrollbar: {
                      vertical: "hidden",
                      horizontal: "hidden",
                    },
                    scrollBeyondLastLine: false,
                    wordWrap: "on",
                    fontSize: "12px",
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </Two_Part>
      <Footer />
    </div>
  );
};

export default Review;
