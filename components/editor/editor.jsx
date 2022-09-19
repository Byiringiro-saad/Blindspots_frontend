import React from "react";
import { Controlled as CodeMirror } from "react-codemirror2";

import NoSSR from "../no-ssr/no-ssr";

const Editor = ({ text, onChange }) => {
  return (
    <NoSSR>
      <CodeMirror
        value={text}
        onChange={(editor, value) => onChange}
        onBeforeChange={(editor, data, value) => {}}
        options={{}}
      />
    </NoSSR>
  );
};

export default Editor;
