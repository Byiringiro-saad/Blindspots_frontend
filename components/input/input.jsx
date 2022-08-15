import React from "react";

import styles from "./input.module.css";

const InputWidget = ({ cm, line }) => {
  const [value, setValue] = useState("");
  const [selectedTab, setSelectedTab] = useState("write");
  const [commenting, setCommenting] = useState(false);

  const handleChange = (value) => {
    setValue(value);
  };

  return <div className={styles.container}></div>;
};

export default InputWidget;
