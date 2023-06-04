// 티켓컴포넌트
import styled from "styled-components";

const CheezeTiket = (props) => {
  return (
    <Container>
      <div style={{ display: "flex" }}>
        <Content>
          <label>NAME</label>
          <span>{props.name}</span>
          <label>ADDRESS</label>
          <span>{props.address}</span>
          <label>PRICE</label>
          <span>{props.price}</span>
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
`;

// 치즈티켓 내부 내용 부분
const Content = styled.div`
  position: relative;
  top: 15rem;
  left: 10rem;
  font-size: 1.6rem;
  display: grid; // 그리드 3행 2열
  grid-template-columns: 15rem 24rem;
  grid-template-rows: repeat(2, 7rem);
  justify-items: flex-start;
  text-align: left;
`;
export default CheezeTiket;
