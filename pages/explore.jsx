import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPlaceholder from "react-placeholder/lib";
// import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

import Pagination from "../components/pagination/pagination";
import Nav from "../components/nav/nav";
import Footer from "../components/footer/footer";
import styles from "../styles/Explore.module.css";
import Box from "../components/box/box";

const Explore = () => {
  const [loading, setLoading] = useState(true);
  const [snippets, setSnippets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perpage] = useState(12);

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

  const indexOfLastPost = currentPage * perpage;
  const indexOfFirstPost = indexOfLastPost - perpage;
  const currentPosts = snippets.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (page) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setLoading(true);
    axios.get("/api/snippets").then((data) => {
      setSnippets(data.data);
      setLoading(false);
    });
  }, []);

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
                <div className={styles.box} key={index}>
                  <p>{langauge?.name}</p>
                  <p>{langauge?.reviews}</p>
                </div>
              ))}
            </div>
            {/* <AiOutlineRight className={styles.icon} /> */}
          </div>
        </div>
        {loading ? (
          <div className={styles.reviews}>
            {[...Array(8)].map((_, index) => (
              <ReactPlaceholder
                key={index}
                ready={!loading}
                showLoadingAnimation={true}
                type="rect"
                style={{
                  width: "300px",
                  height: "300px",
                  margin: "0 20px 20px 0",
                  borderRadius: "5px",
                }}
              />
            ))}
          </div>
        ) : (
          <div className={styles.reviews}>
            {currentPosts.map((snippet, index) => (
              <Box review={snippet} key={index} />
            ))}
          </div>
        )}
        <Pagination perpage={perpage} data={snippets} paginate={paginate} />
      </div>
      <Footer />
    </div>
  );
};

export default Explore;
