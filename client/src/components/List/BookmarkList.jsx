import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Bookmark from "../Button/Bookmark";

const Container = styled.div`
  width: 38rem;
  height: 57.5rem;
  border-radius: 2rem;
  border: var(--main-color) 0.4rem solid;
  padding: 3rem;
`;

const Title = styled.div`
  font-size: 2rem;
  font-family: GmarketSansBold;
  margin-bottom: 1.2rem;
`;

const Explain = styled.div`
  font-size: 1.8rem;
  margin-bottom: 3rem;
`;
const Image = styled.div`
  width: 38rem;
  height: 38rem;
  border-radius: 2rem;
  background: ${(props) => `url(${props.imgurl})`} center/cover no-repeat;
  margin: 0 auto;
`;
const Hr = styled.hr`
  width: 2.4rem;
  height: 0.4rem;
  border: 0;
  background: var(--main-color);
  margin-bottom: 2rem;
  clear: both; // 북마크버튼 오른쪽 정렬 후 원래대로
`;
const BookmarkList = (props) => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => {
      navigate(`/locDetail/${props.locnum}`, {state: {locnum: props.locnum}});
    }}>
      <Bookmark
        locnum={props.locnum}
        width={"5rem"}
        height={"5rem"}
        style={{ float: "right", marginBottom: "3rem" }}
      />
      <Hr />
      <Title>{props.locname}</Title>
      <Explain>{props.contit}</Explain>
      <Image imgurl={props.imgurl}/>
    </Container>
  );
};

export default BookmarkList;
