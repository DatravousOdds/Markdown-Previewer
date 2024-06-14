const Header = () => {
  const testStyles = {
    color: "red",
  };
  return (
    <header>
      <div>
        <img src="#" alt="Logo" />
        <h1 style={testStyles}>Editor</h1>
      </div>

      <div>
        <i className="fa-solid fa-expand"></i>
      </div>
    </header>
  );
};

export default Header;
