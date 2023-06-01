// 정보 알아보기 button
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Info = (props) => {
  const navigate = useNavigate();

  return (
    <Container
      onClick={() => {
        navigate(`/loclist/${props.content}/${props.idx+1}`, { state: { content: props.content, conloc: props.idx+1, title: props.title } });
      }}
    >
      정보 알아보기
    </Container>
  );
};

const Container = styled.button`
  position: absolute;
  left: 40%;
  margin-top: 5rem;
  background-color: black;
  border: 0.25rem solid var(--main-color);
  border-radius: 3rem;
  padding: 1.5rem 3rem;
  color: var(--main-color);
`;
export default Info;
