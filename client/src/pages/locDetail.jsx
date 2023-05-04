import styled from "styled-components";
import Navbar from "../components/Navbar";
import Bookmark from "../components/Button/Bookmark";
import CheezeTiket from "../components/Card/CheezeTiket";
import LineGif from "../components/LineGif";
import ReverseBtn from "../components/Button/ReverseBtn";

const locDetail = () => {
  return (
    <Container>
      <div style={{ height: "108rem" }}>
        <Navbar />
      </div>
      <ContentBox>
        <Bookmark />
        <h1 className="bold" style={{ fontSize: "6rem" }}>
          후나미자카
        </h1>
        <h2 style={{ fontSize: "3rem" }}>
          처음 영화가 시작될 때 우체부가 오토바이를 타고 언덕을 올라오는 장면
        </h2>
        <CheezeTiket />
        <div
          style={{ width: "78rem", height: "48rem", backgroundColor: "red" }}
        ></div>
      </ContentBox>
      <LineGif />
      <h1 className="h1-border">COMMUNITY</h1>
      <ReverseBtn />
      <ReverseBtn />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  margin: 0;
  text-align: center;
`;

const ContentBox = styled.div`
  height: 156rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export default locDetail;
