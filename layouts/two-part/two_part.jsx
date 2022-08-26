import React, { useEffect, useState } from "react";
import ReactPlaceholder from "react-placeholder";
import axios from "axios";

import styles from "./two_part.module.css";
import Ad from "../../components/ad/ad";
import Card from "../../components/card/card";

const Two_Part = ({ children, data }) => {
  const [loading, setLoading] = useState(false);
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get("/api/snippets").then((data) => {
      setSnippets(data.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.left}>{children}</div>
      <div className={styles.right}>
        <p className={styles.header}>Some featured reviews</p>
        {loading ? (
          <div className={styles.card}>
            {[...Array(10)].map((_, index) => (
              <ReactPlaceholder
                key={index}
                ready={!loading}
                showLoadingAnimation={true}
                type="rect"
                style={{
                  width: "300px",
                  height: "70px",
                  margin: "0 0 20px 0",
                  borderRadius: "5px",
                }}
              />
            ))}
          </div>
        ) : (
          <div className={styles.cards}>
            {snippets?.slice(0, 10).map((snippet, index) => (
              <Card card={snippet} key={index} />
            ))}
            <Ad />
          </div>
        )}
      </div>
    </div>
  );
};

export default Two_Part;
