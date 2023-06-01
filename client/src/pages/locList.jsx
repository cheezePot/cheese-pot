import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios"
import styled from "styled-components";
import Navbar from "../components/Navbar";
import LocItem from "../components/List/LocItem";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  text-align: left;
  overflow: hidden;
`;

const Top = styled.div`
  width: 100%;
  height: 60rem;
  display: flex;
  gap: 6rem;
  margin-top: 7rem;
`;
const Image = styled.div`
  width: 48rem;
  height: 40rem;
  background-image: url("/images/DRAMA.gif");
  background-size: contain;
  background-position: center;
`;


const LocList = () => {
  const location = useLocation();
  const title = location.state.title;
  let idx = useParams().conloc;
  const [loc, setLoc] = useState();
  const [panding, setPanding] = useState(false);
  const { pathname } = useLocation();

    // api가져오기
  useEffect(() => {
    axios.get(`http://localhost:5000/api/locdata/${idx}/`,
    {params: {connum: idx}},
    {withCredentials: true}
    )
    .then((res) => {
      console.log(res.data);
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
          <div className="h1-style">{title}</div>
          <Image />
        </Top>
      </div>
      {panding ? 
        loc.map((a, i)=>{
          return(
            <LocItem click={()=>{}} locName={loc[i]["locnam"]} locEx={loc[i]["locex"]} imageUrl={loc[i]["potolin"]} />
          )
        }): <div>로딩중...</div>}
    </Container>
  );
};

export default LocList;
