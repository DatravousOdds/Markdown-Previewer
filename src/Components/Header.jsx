import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";

const Header = ({title}) => {
  const testStyles = {
    color: "white",
  };
  return (
    <header>
      <div className="hdr">
        <img src="public/favicon.svg" alt="Logo" />
        <h3 className="editor" style={testStyles}>
          {title}
        </h3>
        <FontAwesomeIcon className="icon" icon={faExpand} />
      </div>
    </header>
    
    
  );
};

export default Header;
