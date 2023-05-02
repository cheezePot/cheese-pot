import styled from "styled-components";

const DetailAlart = () => {
  return (
    <Container>
      <Image style={{ float: "left" }} />
      <div
        className="light"
        style={{
          overflow: "hidden",
          margin: "0 1.2rem 0 0",
          paddingLeft: "3rem",
        }}
      >
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
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 780px;
  height: 380px;
  border-radius: 1.2rem;
  border: 3px solid var(--main-color);
`;
const Image = styled.div`
  width: 380px;
  height: 380px;
  border-radius: 1.2rem;
  background-color: red;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  color: var(--main-color);
  padding: 5rem 0 2rem 0;
  margin-right: 3rem;
`;

const Content = styled.div`
  margin-top: 3rem;
  display: grid;
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
export default DetailAlart;
