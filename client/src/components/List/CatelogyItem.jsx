import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const CatelogyItem = (props) => {
  const navigate = useNavigate();

  const Container = styled.div`
    border-radius: 2rem;
    border: 0.3rem yellow solid;
    width: 58rem;
    height: 30rem;
    display: flex;
    align-items: center;
    padding: 0 5rem;
  `;

  const RightBox = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 4rem;
  `;

  const Image = styled.div`
    width: 20rem;
    height: 20rem;
    float: left;
    background-image: ${(props) =>
      `url(${process.env.PUBLIC_URL}/images/categorlItem/${props.content}.gif)`};
    background-position: center;
    background-size: contain;
    margin: 2rem;
  `;

  const H3 = styled.h3`
    font-family: GravityPoints;
    font-weight: 100;
    color: var(--main-color);
    position: relative;
    font-size: 1.8rem;
  `;

  const ToListBtn = styled.button`
    background-color: transparent;
    padding: 1.3rem 3rem;
    border: white 0.2rem solid;
    border-radius: 3.6rem;
    font-size: 1.5rem;
    color: white;
  `;

  return (
    <Container>
      <Image content={props.content} />
      <RightBox>
        <H3>#{props.content}</H3>
        <ToListBtn
          onClick={() => {
            navigate(`/selectPage/${props.content}`, {state:{content : props.content}});
          }}
        >
          리스트 보기
        </ToListBtn>
      </RightBox>
    </Container>
  );
};

export default CatelogyItem;
