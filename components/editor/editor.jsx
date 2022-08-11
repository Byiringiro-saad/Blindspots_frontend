import React from "react";
import Editor from "@monaco-editor/react";

import styles from "./editor.module.css";

const EditorComp = ({ codes, onChange, language }) => {
  return (
    <div className={styles.container}>
      <Editor
        height={`100%`}
        width={`100%`}
        language={language}
        value={codes}
        theme={{ value: "oceanic-next", label: "Oceanic Next" }}
        defaultValue="// some comment"
        onChange={(e) => onChange(e)}
        options={{
          readOnly: true,
          lineNumbers: true,
          minimap: { enabled: false },
          scrollbar: {
            vertical: "hidden",
            horizontal: "hidden",
          },
          wordWrap: "on",
          fontSize: "12px",
        }}
      />
    </div>
  );
};

export default EditorComp;
