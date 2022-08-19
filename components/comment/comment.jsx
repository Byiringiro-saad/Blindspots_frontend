import React from "react";
import ReactDOM from "react-dom";
import styles from "./comment.module.css";

const Comment = () => {
  return <div className={styles.container}></div>;
};

export const addCommentLineWidget = (cm, comment) => {
  const commentContainer = document.createElement("div");
  commentContainer.className = "commentContainer";

  // // "commentContainer";
  const root = ReactDOM.createRoot(commentContainer);
  root.render(<Comment comment={comment} />);
  cm.addLineWidget(comment.line, commentContainer);
};

export default Comment;
