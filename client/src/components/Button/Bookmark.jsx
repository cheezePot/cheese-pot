// 치즈모양 북마트 toggle button
import styled, { css } from "styled-components";
import { useState } from "react";

// 향후 각 장소를 저장했을 때 사용자 DB에 들어가도록 해야함.
const ToggleBtn = styled.button`
  width: ${(props) => props.width || "8rem"};
  height: ${(props) => props.height || "8rem"};
  border: none;
  cursor: pointer;
  background: transparent;
  /* toggle의 상태에 따라 이미지가 바뀜 */
  background-image: ${(props) =>
    !props.toggle
      ? `url(${process.env.PUBLIC_URL}/images/cheeseNonChk.png)`
      : `url(${process.env.PUBLIC_URL}/images/cheeseChk.png)`};
  background-position: center;
  background-size: cover;
  object-fit: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;

const Bookmark = (props) => {
  const [isOn, setisOn] = useState(false);
  // const [bookmarks, setBookmarks] = useState([]);

  const toggleHandler = () => {
    setisOn(!isOn); //toggle 설정
    let bookmarks = localStorage.getItem('bookmarks');
    if(bookmarks === null) bookmarks=[];
    else bookmarks = JSON.parse(bookmarks);
    if(!isOn){
      bookmarks.push(props.locnum);
    }
    else{
      bookmarks.pop(props.locnum);
    }
    bookmarks = new Set(bookmarks);
    localStorage.setItem("bookmarks", JSON.stringify([...bookmarks]));
  };

  return (
    <>
      {/* props에 isOn state를 넘김 */}
      <ToggleBtn
        onClick={toggleHandler}
        toggle={isOn}
        width={props.width}
        height={props.height}
        style={props.style}
      />
    </>
  );
};

export default Bookmark;
