import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import ReactPlaceholder from "react-placeholder/lib";

import Pagination from "../../components/pagination/pagination";
import Nav from "../../components/nav/nav";
import Footer from "../../components/footer/footer";
import styles from "../../styles/Explore.module.css";
import Box from "../../components/box/box";
import filterArray from "../../features/groupBy";

const Explore = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [snippets, setSnippets] = useState([]);
  const [currentSnippets, setCurrentSnippets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perpage] = useState(12);
  const [active, setActive] = useState("all");

  const [languages, setLanguages] = useState([{ name: "all" }]);

  const indexOfLastPost = currentPage * perpage;
  const indexOfFirstPost = indexOfLastPost - perpage;
  const currentPosts = currentSnippets?.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const paginate = (page) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handlelanguage = (language) => {
    if (language.name != "all") {
      router.push(
        { pathname: `/explore`, query: { lan: language.name } },
        undefined,
        {
          shallow: true,
        }
      );
    } else {
      router.push({ pathname: `/explore`, query: {} }, undefined, {
        shallow: true,
      });
    }
    setActive(language.name);

    if (language.name === "all") {
      setCurrentPage(1);
      setCurrentSnippets(snippets);
    } else {
      const filtered = snippets.filter((snippet) => {
        if (snippet.language === language.name) {
          return true;
        }
      });
      setCurrentPage(1);
      setCurrentSnippets(filtered);
    }
  };

  useEffect(() => {
    if (router.query.lan) {
      const filtered = snippets.filter((snippet) => {
        if (snippet.language === router.query.lan) {
          return true;
        }
      });
      setActive(router.query.lan);
      setCurrentPage(1);
      setCurrentSnippets(filtered);
      console.log(filtered);
    }
  }, [router.query, snippets]);

  useEffect(() => {
    const groupedSnippets = filterArray(snippets, "language");
    let groupedLanguages = Object.keys(groupedSnippets).map((k) => ({
      name: k,
      reviews: groupedSnippets[k].length,
    }));

    if (languages.length < 2) {
      setLanguages([...languages, ...groupedLanguages]);
    }
  }, [snippets]);

  useEffect(() => {
    if (localStorage.getItem("auth_token")) {
      setLoading(true);
      axios.get("/api/snippets").then((data) => {
        console.log(data.data);
        setSnippets(data.data);
        setCurrentSnippets(data.data);
        setLoading(false);
      });
    } else {
      toast.error("Sign in first!", {
        toastId: "explore",
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
      <Nav color="393939" />
      <div className={styles.content}>
        <div className={styles.top}>
          <p>
            <span>{snippets?.length} </span>
            Featured reviews
          </p>
          <div className={styles.languages}>
            {/* <AiOutlineLeft className={styles.icon} /> */}
            <div className={styles.all}>
              {languages.map((langauge, index) => (
                <div
                  className={styles.box}
                  style={
                    langauge.name === active
                      ? { background: "var(--blue)", color: "var(--white)" }
                      : {}
                  }
                  key={index}
                  onClick={() => handlelanguage(langauge, index)}
                >
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
        <Pagination
          perpage={perpage}
          data={currentSnippets}
          paginate={paginate}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Explore;
