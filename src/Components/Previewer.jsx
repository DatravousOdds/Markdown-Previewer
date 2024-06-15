import Header from './Header';


const Previewer = ({text}) => {
  const preHeader = "Welcome my React Markdown Previewer!";
  const headerStyles = {
    fontSize: "1.5rem",
    textAlign: "left",
    color: "white",
    padding: "0.4rem",
  }
  return (
    <>
      <div className="container wider-width">
        <Header title={"Previewer"}/>
        <div className='pre' id="preview">
          <h1 style={headerStyles}>{preHeader}</h1>
          <hr></hr>
          <p>{text}</p>
        </div>
        
      </div>
    </>
  );
};

export default Previewer;
