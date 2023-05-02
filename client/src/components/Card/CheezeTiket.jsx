import styled from "styled-components";

const CheezeTiket = () => {
  return (
    <Container>
      <div style={{ display: "flex" }}>
        <Content>
          <label>NAME</label>
          <span>旧日本郵船小樽支店</span>
          <label>ADDRESS</label>
          <span>〒047-0031 北海道小樽市色内３丁目７-8</span>
          <label>PRICE</label>
          <span>성인 300엔, 고등학생 150엔, 중학생 이하 무료</span>
        </Content>
        <div style={{ width: "78rem", height: "43rem" }}></div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 78rem;
  height: 38.7rem;
  background-image: url("/images/ticket.png");
  background-position: center;
  background-repeat: no-repeat;
`;

const Content = styled.div`
  // 치즈티켓 내부 내용 부분
  position: relative;
  top: 15rem;
  left: 10rem;
  font-size: 1.6rem;
  display: grid;
  grid-template-columns: 15rem 24rem;
  grid-template-rows: repeat(2, 7rem);
  justify-items: flex-start;
  text-align: left;
`;
export default CheezeTiket;
