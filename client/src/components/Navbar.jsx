import { Link } from "react-router-dom";

const navContainer = {
  display: "flex",
  padding: "4rem 23rem",
};

const rightBar = {
  marginLeft: "1rem",
  display: "flex",
  marginLeft: "auto",
  gap: "1rem",
};

const navStyle = {
  fontFamily: "GravityPoints",
  fontSize: "8px",
  color: "white",
  position: "relative",
  listStyleType: "none",
};

const Navbar = (props) => {
  return (
    <div style={navContainer}>
      <Link to="../pages/main.jsx">
        <img
          src={process.env.PUBLIC_URL + "/images/cheezepotLogo.png"}
          alt="logo"
        />
      </Link>
      <div style={rightBar}>
        <li style={navStyle}>CATEGORY</li>
        <li style={navStyle}>CHEEZE LIST</li>
      </div>
    </div>
  );
};

export default Navbar;
