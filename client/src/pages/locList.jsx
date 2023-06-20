import { useState, useEffect, createContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios"
import styled from "styled-components";
import Navbar from "../components/Navbar";
import LocItem from "../components/List/LocItem";

// export const AppContext = createContext();

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  text-align: left;
  overflow: hidden;
`;
const Title = styled.div`
  width: 60rem;
  font-family: GmarketSansBold;
  color: var(--main-color);
  line-height: 15rem;
  letter-spacing: 1rem;
  font-size: 10rem;
`
const Top = styled.div`
  width: 100%;
  height: 60rem;
  display: flex;
  align-items: center;
  gap: 6rem;
`;
const Image = styled.div`
  width: 48rem;
  height: 40rem;
  background-image: url("/images/DRAMA.gif");
  background-size: contain;
  background-position: center;
`;


const LocList = (props) => {
  const location = useLocation();
  // const title = location.state.title;
  let connum = useParams().conloc;
  const [loc, setLoc] = useState();
  const [panding, setPanding] = useState(false);
  const { pathname } = useLocation();

  // bookmarks 관리 context로 넘겨서 전역관리. bookmarks 배열에 
  // const [bookmarks, setBookmarks] = useState(() => {
  //   const bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
  //   if(bookmarks === null) return []
  //   else return JSON.parse(bookmarks)
  // });

  // const [bookmarks, setBookmarks] = useState(JSON.parse(localStorage.getItem('bookmarks')) || []);

  // // const [isOn, setisOn] = useState(bookmarks.includes(props.locnum));
  // useEffect(() => {
  //   localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  // }, [bookmarks])

//////////////////////////////////////

  // api가져오기
  useEffect(() => {
    axios.get(`http://localhost:5000/api/locdata/${connum}/`,
    {params: {connum: connum}},
    {withCredentials: true}
    )
    .then((res) => {
      setLoc(res.data);
      setPanding(true);
    })
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Container>
      <Navbar />
      <div style={{ padding: "0 37rem" }}>
        <Top>
          {/* <Title>{title}</Title> */}
          <Image />
        </Top>
      </div>
      {panding ? 
        loc.map((a, i)=>{
          return(
            <LocItem connum={connum} locnum={loc[i]["locnum"]} locName={loc[i]["locnam"]} locEx={loc[i]["locex"]} imageUrl={loc[i]["potolin"]} />
          )
        }): <div>로딩중...</div>}
    </Container>
  );
};

export default LocList;
