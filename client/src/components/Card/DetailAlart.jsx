// 사진눌렀을 때 나오는 alart창
import styled from "styled-components";
import Info from "../Button/Info";

const Container = styled.div`
  width: 84rem;
  height: 42rem;
  border-radius: 1.2rem;
  border: 0.3rem solid var(--main-color);
  background-color: black;
  position: fixed;
  z-index: 100;
  top: 25%;
  left: 30%;
`;
const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.7;
  position: absolute;
  z-index: 50;
`
const Image = styled.div`
  width: 42rem;
  height: 42rem;
  border-radius: 0.8rem;
  background-size: cover;
  background-position: center;
  background-image: ${(props) =>
    `url(${props.imgurl})`};
`
const CancelBtn = styled.div`
  width: 5rem;
  height: 5rem;
  background-image: url('/images/closeIcon.png');
  background-position: center;
  margin-top: 3rem;
  margin-left: auto;
  cursor: pointer;
  &:hover{
    background-color: #3f3f3f;
    border-radius: 5rem;
  }
`
const Hr = styled.hr`
  height: 0.1px;
  background: var(--main-color);
  border: 0;
`
const Inner = styled.div`
  overflow: hidden;
  margin: 0 1.2rem 0 0;
  padding-left: 3rem;
`;

// 작품 제목
const Title = styled.h1`
  font-size: 2.6rem;
  color: var(--main-color);
  padding: 1rem 0 2rem 0;
  margin-right: 3rem;
`;

// 내용들...
const Content = styled.div`
  margin-top: 3rem;
  display: grid; // 4행 2열
  grid-template-rows: repeat(3, 4rem) 10rem;
  grid-template-columns: 5rem 30rem;
  justify-items: baseline;
  font-size: 1.45rem;
  line-height: 2.5rem;
  // overflow: hidden;
`;

const Label = styled.label`
  font-family: GmarketSansMedium;
  color: var(--main-color);
`;

// 출연진들
const Cast = styled.div`
  width: 30rem;
  height: 2rem;
  overflow: scroll;
`
// 작품 설명
const ConEx = styled.div`
  height: 8rem;
  overflow: scroll;
`

const DetailAlart = (props) => {
  return (
    <>
      <Container>
        <Image style={{ float: "left" }} imgurl={props.contents[props.index]["titconlin"]}/>
        <Inner className="light">
          <CancelBtn onClick={props.click}/>
          <Title>{props.contents[props.index]["contit"]}</Title>
          <Hr/>
          <Content>
            <Label>개봉일</Label>
            <span>{props.contents[props.index]["open"]}</span>
            <Label>출연진</Label>
            <Cast>{props.contents[props.index]["cast"]}</Cast>
            <Label>장르</Label>
            <span style={{ marginLeft: "2rem" }}>{props.contents[props.index]["genre"]}</span>
            <Label>요약</Label>
            <span style={{ marginLeft: "2rem" }}>
              <ConEx>
                {props.contents[props.index]["conex"]}
              </ConEx>
            </span>
          </Content>
        </Inner>
      <Info idx={props.contents[props.index]["connum"]} title={props.title}/>
      </Container>
      <Background onClick={props.click}/>
    </>
  );
};

export default DetailAlart;
