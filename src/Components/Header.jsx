const Header = () => {
  const testStyles = {
    color: "red",
  };
  return (
    <header>
      <div className="hdr">
        <img src="public/favicon.svg" alt="Logo" />

        <h3 className="editor" style={testStyles}>Editor</h3>

        <h3  className="icon"style={{ color: "black" }}>Icon</h3>
      </div>
    </header>
  );
};

export default Header;
