import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Bookmark from "../Button/Bookmark";
import { useEffect } from "react";

const Container = styled.div`
  width: 38rem;
  height: 57.5rem;
  background-color: black;
  border-radius: 2rem;
  border: var(--main-color) 0.4rem solid;
  padding: 3rem;
  cursor: pointer;
  transition: 0.5s;
  &:hover{
    transform: scale3d(1.1, 1.1, 1.1);
  }
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
  const [contents, setContents] = useState(props.contents);
  useEffect(()=>{
    setContents(props.contents);
  },[props.contents]);
  // contit={contents[i]['contit']} locnum={contents[i]['locnum']} locname={contents[i]['locnam']} imgurl={contents[i]['potolin']}
  return (
    <Container>
      <Bookmark
        isOn={true}
        locnum={contents.locnum}
        width={"5rem"}
        height={"5rem"}
        style={{ float: "right", marginBottom: "3rem" }}
      />
      <Hr />
      <Title>{contents.locnam}</Title>
      <Explain>{contents.contit}</Explain>
      <Image imgurl={contents.potolin} onDoubleClick={() => {
        navigate(`/locDetail/${contents.locnum}`, {state: {locnum: contents.locnum}});
      }}/>
    </Container>
  );
};

export default BookmarkList;
