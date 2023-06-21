// // 네비게이션바
import {  useState, useCallback, useRef, useMemo } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 118rem;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  border-radius: 2rem;
  border: var(--main-color) solid 0.3rem;
  padding: 2rem 3rem 3rem 5rem;
  background: black;
  color: var(--main-color);
  `;
const Header = styled.div`
  color: var(--main-color);
  height: 8rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Title = styled.input`
  font-family: GmarketSansBold;
  font-size: 3.2rem;
  display: flex;
  align-items: center;
  background: transparent;
  outline: none;
  border: 0;
`;
const Button = styled.div`
  top: 8px;
  right: 8px;
  font-size: 14px;
  position: absolute;
`;
const Info = styled.div`
  font-weight: bold;
  font-size: 2rem;
  display: flex;
  gap: 1.4rem;
  justify-content: ${(props) => props.isCollapse ? "flex-start" : "flex-end"};
  color: ${(props) => props.isCollapse ? "#939393" : "white"};
`;
const ContentsWrapper = styled.div`
  width: 118rem;
  height: 0;
  width: inherit;
  overflow: hidden;
  transition: height 0.35s ease, background 0.35s ease;
`;
const Contents = styled.div`
  text-align: left;
  padding-top: 7rem;
  line-height: 4rem;
`;
const Input = styled.input`
  width: 250rem;
  font-size: 2rem;
  border: 0;
  background: transparent;
  outline: none;
`
const PostAccordion = (props) => {
  const parentRef = useRef(null);
  const childRef = useRef(null);
  const [isCollapse, setIsCollapse] = useState(false); // 열고, 닫힘
  const parentRefHeight = parentRef.current?.style.height ?? '0px';
  const buttonText = parentRefHeight === '0px' ? '열기' : '닫기';

  const handleButtonClick = useCallback(
    (event) => {
      event.stopPropagation();
      if (parentRef.current === null || childRef.current === null) {
        return;
      }
      if (parentRef.current.clientHeight > 0) {
        parentRef.current.style.height = "0";
      } else {
        // parentRef.current.style.height = `${childRef.current.clientHeight}px`;
        parentRef.current.style.height = `45rem`;
      }
      setIsCollapse(!isCollapse);
    },
    [isCollapse]
  );

  return (
    <Container>
    <Header onClick={handleButtonClick}>
      <Title placeholder="리뷰글의 타이틀을 입력해주세요"/>
      <Button>{buttonText}</Button>
    </Header>
    <Info isCollapse={isCollapse}>
      <div></div>
    </Info>
    <ContentsWrapper ref={parentRef}>
      <Contents ref={childRef}>
        <Input />
      </Contents>
    </ContentsWrapper>
  </Container>
  );
};

export default PostAccordion;