// 정보 알아보기 button
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Info = (props) => {
  const navigate = useNavigate();

  return (
    <Container
      onClick={() => {
        navigate(`/loclist/${props.idx}`, { state: {conloc: props.idx, title: props.title } });
      }}
    >
      정보 알아보기
    </Container>
  );
};

const Container = styled.button`
  position: absolute;
  left: 40%;
  margin-top: 8rem;
  background-color: black;
  border: 0.25rem solid var(--main-color);
  border-radius: 3rem;
  padding: 1.5rem 3rem;
  color: var(--main-color);
  &:hover{
    background-color: #3f3f3f;
  }
`;
export default Info;
