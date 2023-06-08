import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import SelectBox from "../components/Card/SelectBox";
import BookmarkList from "../components/List/BookmarkList";
import axios from "axios";
import { AppContext } from "../App";

const Container = styled.div`
  width: 100%;
  height: 130vh;
  background-color: black;
  margin: 0;
  padding-bottom: 10rem;
  text-align: left;
  overflow: hidden;
`;
const Main = styled.div`
  padding: 0 37rem;
  font-family: GmarketSansLight;
`;
const SubNavbar = styled.div`
  display: flex;
  margin: 13rem 0 7rem 0;
  align-items: center;
`;
const Selectors = styled.div`
  display: flex;
  margin-left: auto;
  gap: 2rem;
`;

const ListContainer = styled(SubNavbar)`
  gap: 2rem;
`;

const LocList = () => {
  const { pathname } = useLocation();
  const {bookmarks, setBookmarks } = useContext(AppContext);
  const [count, setCount] = useState(bookmarks.length); // 북마크한 장소의 갯수
  const [panding, setPanding] = useState(false);
  const [contents, setContents] = useState();
  const query = Object.values(bookmarks).toString(); // [1,2,3] => 1,2,3

  useEffect(() => {
    // localstorage에서 데이터를 가져옴 => db에서 데이터를 가져옴
    axios.get(`http://localhost:5000/api/bookmarks?locnum=${query}`,
    )
    .then((res) => {
      setContents(res.data);
      setBookmarks(bookmarks);
      setCount(bookmarks.length);
      setPanding(true);
    })
  }, [bookmarks, count]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <Container>
      <Navbar />
      <Main>
        <h1 className="h1-style">CHEEZE LIST</h1>
          <SubNavbar>
            <h2>
              <span
                style={{
                  fontSize: "3.2rem",
                  fontWeight: "bold",
                }}
              >
                {count}
              </span>
              LIST
            </h2>
            <Selectors>
                <SelectBox />
                <SelectBox />
                <SelectBox />
            </Selectors>
          </SubNavbar>
          {panding ? 
            <>
              <Selectors>
                {bookmarks.map((bookmark, i) => {
                  return(
                    <BookmarkList contents={contents[i]}/>
                  )
                })}
              </Selectors>
            </>
          : <div>로딩중...</div>}
      </Main>
     </Container>
  );
};

export default LocList;
