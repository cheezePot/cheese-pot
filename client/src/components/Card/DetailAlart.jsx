import styled from "styled-components";

const DetailAlart = () => {
  const content = {
    display: "flex",
    flexDirection: "column",
    float: "left",
    width: "350px",
    fontSize: "14px",
    padding: "2rem 0",
  };
  const labelStyle = {
    marginLeft: "1.2rem",
  };
  return (
    <Container>
      <Image style={{ float: "left" }} />
      <div
        className="light"
        style={{
          overflow: "hidden",
          margin: "0 1.2rem 0 0",
          paddingLeft: "1.2rem",
        }}
      >
        <h1 style={{ padding: "5rem 0 1.1rem 0" }}>러브레터</h1>
        <hr />
        <div style={content}>
          <label>
            개봉일
            <span style={labelStyle}>1995. 03. 25</span>
          </label>
          <br />
          <label>
            출연진
            <span style={labelStyle}>
              나카야마 미호, 토요카와 에츠시, 사카이 미키
            </span>
          </label>
          <br />
          <label>
            장르
            <span style={{ marginLeft: "2rem" }}>드라마, 멜로, 판타지</span>
          </label>
          <br />
          <label>
            요약
            <span style={{ marginLeft: "2rem" }}>
              <div>
                잘못 배달된 연애편지로 시작되는 눈 덮힌 오타루시와 고베시... 이
                둘에게 어떤 일이 일어나게 될까?
              </div>
            </span>
          </label>
        </div>
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
export default DetailAlart;
