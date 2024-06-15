import "./App.css";
import Editor from "./Components/Editor.jsx";
import Previewer from "./Components/Previewer.jsx";
import { useState } from "react";
import { marked } from "marked";
// a header (H1 size),
//a sub header (H2 size), a link, inline code, a code block,
//a list item, a blockquote, an image, and bolded text
export default function App() {
  const defaultText = `
  # This is a header
  ## This is a sub header
  [Github](https://github.com/DatravousOdds?tab=repositories)

  \`<p></p>\`

  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`

  - First item
      - Second item
        - Third item
  > blockquote

  ![alt text](image.jpg)

  **bold text**
  
  `;
  
  const [text, setText] = useState(defaultText);

  marked.setOptions({
    breaks: true,
  })

  const parseText = marked.parse(text);
  
  return (
    <main>
      <Editor text={text} setText={setText} />
      <Previewer text={parseText} />
    </main>
  );
}
