import Header from "./Header";

const Previewer = ({ text }) => {
  const renderMarkdown = (markdown) => {
    if (window.marked) {
      return { __html: window.marked.parse(markdown) };
    }
    return { __html: markdown };
  };
  return (
    <>
      <div className="container wider-width">
        <Header title={"Previewer"} />
        <div
          className="pre"
          id="preview"
          dangerouslySetInnerHTML={renderMarkdown(text)}
        >
        
        </div>
      </div>
    </>
  );
};

export default Previewer;
