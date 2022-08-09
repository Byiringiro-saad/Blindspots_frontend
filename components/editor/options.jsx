import React from "react";

const Language = {
  JAVA: "java",
  PYTHON: "python",
  JAVASCRIPT: "javascript",
  RUBY: "ruby",
  SWIFT: "swift",
  GO: "go",
  RUST: "rust",
  PHP: "php",
  CLIKE: "clike",
};

const languageToText = {
  clike: "C/C++ or other languages",
  java: "Java",
  python: "Python",
  javascript: "JavaScript",
  ruby: "Ruby",
  swift: "Swift",
  go: "Go",
  rust: "Rust",
  php: "PHP",
};

const EditorOptions = ({ language }) => (
  <select
    className="text-muted"
    style={{ width: "100%" }}
    onChange={() => {}}
    defaultValue={language}
    disabled
  >
    <option key={language} value={language} selected>
      {language
        ? language?.charAt(0).toUpperCase() + language?.slice(1)
        : "..."}
    </option>
    {Object.values(Language).map((lang) => (
      <option key={lang} value={lang}>
        {languageToText[lang].charAt(0).toUpperCase() +
          languageToText[lang].slice(1)}
      </option>
    ))}
  </select>
);

export default EditorOptions;
