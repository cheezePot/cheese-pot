// 치즈모양 북마트 toggle button
import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import { AppContext } from "../../pages/locList";

// 향후 각 장소를 저장했을 때 사용자 DB에 들어가도록 해야함.
const ToggleBtn = styled.button`
  width: ${(props) => props.width || "8rem"};
  height: ${(props) => props.height || "8rem"};
  border: none;
  cursor: pointer;
  background: transparent;
  /* toggle의 상태에 따라 이미지가 바뀜 */
  background-image: ${(props) =>
    props.toggle
      ? `url(${process.env.PUBLIC_URL}/images/cheeseChk.png)`
      : `url(${process.env.PUBLIC_URL}/images/cheeseNonChk.png)`};
  background-position: center;
  background-size: cover;
  object-fit: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;

const Bookmark = (props) => {
  const {bookmarks, setBookmarks } = useContext(AppContext); // 전역변수 bookmarks
  const [isOn, setisOn] = useState(bookmarks.includes(props.locnum));

  const toggleHandler = () => {
    setisOn(!isOn); //toggle 설정
    if(!isOn){
      setBookmarks(bookmarks => bookmarks.concat(props.locnum))
      // bookmarks.push(props.locnum); // 한 페이지에서 하나 이상 추가가 안됨.
      //console.log(`추가된 idx: ${props.locnum} 배열: ${bookmarks}`);
    }
    else{
      setBookmarks(bookmarks => bookmarks.filter((element) => element !== props.locnum));
      // bookmarks.splice(bookmarks.indexOf(props.locnum), 1);
      //console.log(`삭제된 idx: ${props.locnum} 배열: ${bookmarks}`);
      // localStorage.setItem("bookmarks", JSON.stringify([...newBookmarks]));
    }
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
