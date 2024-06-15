import Header from  "./Header";

const Editor = ({text, setText }) => {
  
  const handleChange = (e) => {
    
    setText(e.target.value);
  }
  return (
    <>
      <div className="container">
        < Header title={"Editor"}/>
        <textarea value={text} onChange={handleChange} id="editor"></textarea>
      </div>
    </>
  );
};

export default Editor;
