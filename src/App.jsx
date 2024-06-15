import "./App.css";
import Editor from "./Components/Editor.jsx";
import Previewer from "./Components/Previewer.jsx";
import { useState } from 'react';

export default function App() {
  const [text, setText] = useState("");
  return (
    <main>
      <Editor text={text} setText={setText}/>
      <Previewer text={text}/>
    </main>
  );
}
