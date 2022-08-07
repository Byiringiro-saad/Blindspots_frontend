import React, { useEffect, useState } from "react";
import ReactPlaceholder from "react-placeholder";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";
import axios from "axios";

import styles from "./two_part.module.css";
import Ad from "../../components/ad/ad";
import Card from "../../components/card/card";

const Two_Part = ({ children }) => {
  const cookies = new Cookies();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    if (cookies.get("auth_token")) {
      setLoading(true);
      axios.get("/api/snippets").then((data) => {
        setSnippets(data.data);
        setLoading(false);
      });
    } else {
      toast.error("Sign in first!", {
        position: "top-right",
        autoClose: 2000,
        pauseOnHover: false,
      });
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    }
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
            {snippets.slice(0, 10).map((snippet, index) => (
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
