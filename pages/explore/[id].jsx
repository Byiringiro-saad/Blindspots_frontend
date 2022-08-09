import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import { MdReviews } from "react-icons/md";

import Nav from "../../components/nav/nav";
import styles from "../../styles/Review.module.css";
import Footer from "../../components/footer/footer";
import Two_Part from "../../layouts/two-part/two_part";
import Editor from "../../components/editor/editor";
import InputWidget from "../../components/input/input";
import { parseIfJson } from "../../features/parsetJson";

const Review = () => {
  const { query } = useRouter();
  const [review, setReview] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.post("/api/review", { id: query?.id }).then((res) => {
      console.log(res.data);
      if (res.data.id) {
        setReview(res.data);
      }
    });

    axios.post("/api/comments", { id: query?.id }).then((res) => {
      console.log(res.data);
      if (res.data.id) {
        setComments(res.data);
      }
    });
  }, []);

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
            <div className={styles.area}></div>
          </div>
        </div>
      </Two_Part>
      <Footer />
    </div>
  );
};

export default Review;
