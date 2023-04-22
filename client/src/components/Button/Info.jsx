import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Info = () => {
  const navigate = useNavigate();

  return (
    <Container
      onClick={() => {
        navigate("/locList");
      }}
    >
      정보 알아보기
    </Container>
  );
};

const Container = styled.button`
  background-color: transparent;
  border: 3px solid var(--main-color);
  border-radius: 30px;
  padding: 1rem 1.8rem;
  color: var(--main-color);
`;
export default Info;
