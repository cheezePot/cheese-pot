import styled from "styled-components";

const CheezeTiket = () => {
  return (
    <Container>
      <div style={{ display: "flex" }}>
        <Content>
          <label>NAME</label>
          <label>ADDRESS</label>
          <label>PRICE</label>
        </Content>
        <Content>
          <span>旧日本郵船小樽支店</span>
          <span>〒047-0031 北海道小樽市色内３丁目７-8</span>
          <span>
            성인 300엔, 고등학생 150엔, 중학생 이하 무료
            asdlfajsldfjlkasjdflaksjfd
          </span>
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
  position: relative;
  top: 15rem;
  left: 11rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 3rem;
  font-size: 1.6rem;
`;
export default CheezeTiket;
