import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Detail from "../Button/Detail";
import Bookmark from "../Button/Bookmark";

const Container = styled.div`
  width: 192rem;
  height: 50rem;
  color: white;
  padding: 0 47rem;
  background-image: url("https://ko.uni24k.com/media/CACHE/images/unis/building_schools_u3cf4a4a1_871b037d/2237f7157891e223374edb20f3de9af8.jpg");
  background-position: center;
  background-size: cover;
  z-index: -1;
`;

const Gradient = styled.div`
  width: 100%;
  height: 50rem;
  padding: 0;
  background: linear-gradient(transparent, 20%, black);
  opacity: 0.8;
  position: absolute;
  z-index: 3;
`;

const Content = styled.div`
  position: absolute;
  z-index: 10;
`;

const LocTitle = styled.div`
  font-size: 5rem;
  font-family: GmarketSansBold;
  // padding-top: 10rem;
  // margin-bottom: 2.4rem;
`;

const LocDetail = styled.div`
  font-size: 3rem;
  margin-bottom: 15rem;
`;

const DivContent = styled.div`
  width: 100%;
  display: flex;
  align-self: center;
  align-items: center;
  gap: 60rem;
  margin-top: 10rem;
`;
const LocItem = () => {
  return (
    <>
      <Gradient />
      <Container>
        <Content>
          <DivContent>
            <LocTitle>나고야 음악대학</LocTitle>
            <Bookmark />
          </DivContent>
          <LocDetail>메구미와 신이치가 다니는 대학교</LocDetail>
          <Detail />
        </Content>
      </Container>
    </>
  );
};

export default LocItem;
