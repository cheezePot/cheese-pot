// 사진눌렀을 때 나오는 alart창
import styled from "styled-components";

const Container = styled.div`
  width: 78rem;
  height: 38rem;
  border-radius: 1.2rem;
  border: 0.3rem solid var(--main-color);
`;
const Image = styled.div`
  width: 38rem;
  height: 38rem;
  border-radius: 1.2rem;
  background-color: red;
`;

const Inner = styled.div`
  overflow: hidden;
  margin: 0 1.2rem 0 0;
  padding-left: 3rem;
`;

// 작품 제목
const Title = styled.h1`
  font-size: 2.8rem;
  color: var(--main-color);
  padding: 5rem 0 2rem 0;
  margin-right: 3rem;
`;

// 내용들...
const Content = styled.div`
  margin-top: 3rem;
  display: grid; // 4행 2열
  grid-template-rows: repeat(3, 5rem) 10rem;
  grid-template-columns: 5rem 30rem;
  justify-items: baseline;
  font-size: 1.4rem;
  line-height: 2.5rem;
`;

const Label = styled.label`
  font-family: GmarketSansMedium;
  color: var(--main-color);
`;

const DetailAlart = () => {
  return (
    <Container>
      <Image style={{ float: "left" }} />
      <Inner className="light">
        <Title>러브레터</Title>
        <hr style={{ backgroundColor: "var(--main-color)" }} />
        <Content>
          <Label>개봉일</Label>
          <span>1995. 03. 25</span>
          <Label>출연진</Label>
          <span>나카야마 미호, 토요카와 에츠시, 사카이 미키</span>
          <Label>장르</Label>
          <span style={{ marginLeft: "2rem" }}>드라마, 멜로, 판타지</span>
          <Label>요약</Label>
          <span style={{ marginLeft: "2rem" }}>
            <div>
              잘못 배달된 연애편지로 시작되는 눈 덮힌 오타루시와 고베시... 이
              둘에게 어떤 일이 일어나게 될까?
            </div>
          </span>
        </Content>
      </Inner>
    </Container>
  );
};

export default DetailAlart;
