// 네비게이션바
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const NavContainer = styled.div`
  display: flex;
  padding: 4rem 23rem;
`;

const RightBar = styled.div`
  margin-left: 1rem;
  display: flex;
  margin-left: auto; // 오른쪽으로 붙이기
  gap: 2rem;
`;

const Linked = styled.div`
  font-family: GravityPoints;
  font-size: 0.8rem;
  color: white;
  position: relative;
  list-style-type: none;
  cursor: pointer;
`;

const Navbar = (props) => {
  const navigate = useNavigate();
  return (
    <NavContainer>
      <img
        src={process.env.PUBLIC_URL + "/images/cheezepotLogo.png"} //logo
        alt="logo"
        onClick={() => {
          navigate("/"); //main page로 이동
        }}
      />
      <RightBar>
        <Linked>CATEGORY</Linked>
        <Linked
          onClick={() => {
            navigate("/cheezeList");
          }}
        >
          CHEEZE LIST
        </Linked>
      </RightBar>
    </NavContainer>
  );
};

export default Navbar;
