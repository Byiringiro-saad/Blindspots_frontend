import React, { useState } from "react";
import dynamic from "next/dynamic";

import Nav from "../components/nav/nav";
import Footer from "../components/footer/footer";
import styles from "../styles/Submit.module.css";
import Two_Part from "../layouts/two-part/two_part";

const CodeEditor = dynamic(
  () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
  { ssr: false }
);

const Submit = () => {
  const [code, setCode] = useState("");

  const [card, setCard] = useState({
    title: "How to get sum and product of all numbers from an array.",
    language: "Python",
    reviews: 12,
  });

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <div className={styles.container}>
      <Nav color="393939" />
      <Two_Part>
        <div className={styles.content}>
          <div className={styles.header}>
            <p>Make a new Submission</p>
          </div>
          <form action="#" className={styles.form}>
            <div className={styles.row}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                placeholder="Choose a short descriptive title"
              />
            </div>
            <div className={styles.row}>
              <label htmlFor="langauge">Language</label>
              <select name="language">
                <option value="javascript">Javascript</option>
              </select>
            </div>
            <div className={styles.row}>
              <label htmlFor="title">
                What position are you interviewing for?
              </label>
              <input
                type="text"
                placeholder="e.g. Junior, senior, Principal Engineer..."
              />
            </div>
            <div className={styles.bigRow}>
              <label htmlFor="email">Description</label>
              <textarea
                cols="30"
                rows="7"
                placeholder="Describe your question here"
              ></textarea>
            </div>
            <div className={styles.editorRow}>
              <label htmlFor="codes">Solution</label>
              <CodeEditor
                value={code}
                language="js"
                placeholder="Write your code here!"
                onChange={handleCodeChange}
                padding={15}
                style={{
                  background: "#F9F9F9",
                  width: "100%",
                  height: "100%",
                  border: "1px solid var(--gray)",
                  borderRadius: "5px",
                  overflowY: "scroll",
                }}
              />
            </div>
            <p>
              In order for us to give you feedback on your code, please ensure
              that you submit the complete question along with your solution.
              Submissions with inadequate context will be ignored.
            </p>
            <button type="button">Submit your code</button>
          </form>
        </div>
      </Two_Part>
      <Footer />
    </div>
  );
};

export default Submit;
