// 자세히 보기 button
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();

  return (
    <Container
      onClick={() => {
        navigate("/locDetail");
      }}
    >
      자세히 보기
    </Container>
  );
};

const Container = styled.button`
  background-color: transparent;
  border: 0.2rem solid white;
  border-radius: 3rem;
  padding: 1rem 2.5rem;
  color: white;
`;
export default Detail;
