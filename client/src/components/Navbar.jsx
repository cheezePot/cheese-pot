import { useNavigate } from "react-router-dom";

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
  fontSize: "0.8rem",
  color: "white",
  position: "relative",
  listStyleType: "none",
};

const Navbar = (props) => {
  const navigate = useNavigate();
  return (
    <div style={navContainer}>
      <img
        src={process.env.PUBLIC_URL + "/images/cheezepotLogo.png"}
        alt="logo"
        onClick={() => {
          navigate("/");
        }}
      />
      <div style={rightBar}>
        <li style={navStyle}>CATEGORY</li>
        <li style={navStyle}>CHEEZE LIST</li>
      </div>
    </div>
  );
};

export default Navbar;
