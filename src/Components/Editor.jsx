import Header from  "./Header";
import { useState } from "react";
const Editor = () => {
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        < Header title={"Editor"}/>
        <textarea id="editor"></textarea>
      </div>
    </>
  );
};

export default Editor;
