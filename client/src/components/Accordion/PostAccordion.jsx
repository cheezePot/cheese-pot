// // 네비게이션바
import {  useState, useCallback, useRef, useEffect } from "react";
import axios from "axios";
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
  background: var(--main-color);
  color: black;
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
  color: black;
`;
const Button = styled.div`
  top: 3rem;
  right: 8px;
  width: 28rem;
  height: 6rem;
  font-size: 14px;
  position: absolute;
  background: ${(props)=> !props.isCollapse ? "url('/images/locDetail/writeBtn.png') center/contain no-repeat" : "url('/images/locDetail/uploadBtn.png') center/contain no-repeat"}
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
const TextArea = styled.textarea`
  width: 120rem;
  font-size: 2rem;
  border: 0;
  background: transparent;
  outline: none;
  line-height: 4rem;
  color: black;
`
const PostAccordion = (props) => {
  const parentRef = useRef(null);
  const childRef = useRef(null);
  const [isCollapse, setIsCollapse] = useState(false); // 열고, 닫힘
  const parentRefHeight = parentRef.current?.style.height ?? '0px';
  const buttonText = parentRefHeight === '0px' ? 'writeBtn' : 'uploadBtn';
  
  let [title, setTitle] = useState();
  let [content, setContent] = useState();

  useEffect(()=>{
    
  }, []);

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

  
  const postBoard = (locnum) => {
    if(title!=="" && content!==""){
      axios.post(`http://localhost:5000/board/post/${locnum}`,
      {
        title: title,
        content: content,
      },
      {params : {locnum: locnum}},
      {withCredentials: true}
    )
    .then((res)=>{
      console.log(res);
      setTitle('');
      setContent('');
    })
    }
  }

  return (
    <Container>
    <Header onClick={handleButtonClick}>
      <Title placeholder="리뷰글의 타이틀을 입력해주세요" maxLength={20} value={title} onChange={(e)=>setTitle(e.target.value)}/>
      <Button text={buttonText} isCollapse={isCollapse} onClick={()=>{postBoard(props.locnum)}} />
    </Header>
    <Info isCollapse={isCollapse}>
    </Info>
    <ContentsWrapper ref={parentRef}>
      <Contents ref={childRef}>
        <TextArea placeholder="게시글의 내용을 입력하세요." row={15} col={20} wrap="on" value={content} onChange={(e)=>setContent(e.target.value)} />
      </Contents>
    </ContentsWrapper>
  </Container>
  );
};

export default PostAccordion;