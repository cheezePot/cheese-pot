import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Detail from "../Button/Detail";
import Bookmark from "../Button/Bookmark";

const Container = styled.div`
  width: 100rem;
  height: 50rem;
  color: white;
  padding: 0 47rem;
  background: ${(props) => `url(${props.imgurl})`} center/cover no-repeat;
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
  width: 50rem;
  display: flex;
  align-self: center;
  align-items: center;
  // gap: 60rem;
  margin-top: 10rem;
`;

const LocItem = (props) => {
  return (
    <>
      <Gradient />
      <Container imgurl={props.imageUrl}>
        <Content>
          <DivContent>
            <LocTitle>{props.locName}</LocTitle>
              <Bookmark locnum={props.locnum} style={{position: 'absolute', left: '100rem'}}/>
          </DivContent>
          <LocDetail>{props.locEx}</LocDetail>
          <Detail connum={props.connum} locnum={props.locnum}/>
        </Content>
      </Container>
    </>
  );
};

export default LocItem;
