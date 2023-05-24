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
  background-image: url("https://ko.uni24k.com/media/CACHE/images/unis/building_schools_u3cf4a4a1_871b037d/2237f7157891e223374edb20f3de9af8.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
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
    <Container>
      <Bookmark
        width={"5rem"}
        height={"5rem"}
        style={{ float: "right", marginBottom: "3rem" }}
      />
      <Hr />
      <Title>시나가와 시즌 테라스 이벤트 광장</Title>
      <Explain>도망치는건 부끄럽지만 도움이 된다</Explain>
      <Image />
    </Container>
  );
};

export default BookmarkList;
