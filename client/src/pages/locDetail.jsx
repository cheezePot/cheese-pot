import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Bookmark from "../components/Button/Bookmark";
import CheezeTiket from "../components/Card/CheezeTiket";
import LineGif from "../components/LineGif";
import ReverseBtn from "../components/Button/ReverseBtn";
import GoogleMaps from "../components/GoogleMaps";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  margin: 0;
  text-align: center;
`;
const BannerImage = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) =>
    `url(${props.imgUrl})`} center/cover no-repeat;
  // background-size: cover;
`;
const Gradient = styled.div`
  width: 100%;
  height: 108rem;
  background: linear-gradient(transparent, 20%, black);
  opacity: 1;
  position: absolute;
  z-index: 3;
`;
const ContentBox = styled.div`
  height: 156rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LocDetail = () => {
  const { pathname } = useLocation();
  const [isOn, setisOn] = useState(false);
  const location = useLocation();
  const locnum = location.state.locnum;
  const [contents, setContents] = useState();
  const [panding, setPanding] = useState(false);
  let [googlemaps, setGooglemaps] = useState(); // location 위도 경도
  
  useEffect(() => {
    axios.get(`http://localhost:5000/api/locdetail/${locnum}`,
    {params: {locnum: locnum}},
    {withCredentials: true}
    )
    .then((res) => {
      setContents(res.data[0]);
      setPanding(true);
      setGooglemaps({
        lat: res.data[0]['lat'],
        lng: res.data[0]['lon'],
      })
    })
  }, []);

  useEffect(() => {
    // 페이지 이동후 스크롤을 가장 위로 올림.
    window.scrollTo(0, 0);
  }, [pathname]);

  // setGooglemaps({
  //   lat: contents['lat'],
  //   lng: contents['lon'],
  // });

  return (
    <Container>
      {panding ? 
      <>
        <div style={{ height: "108rem" }}>
          <BannerImage imgUrl={contents['potolin']}>
            <Navbar />
            <Gradient />
          </BannerImage>
        </div>
        <ContentBox>
          <Bookmark />
          <h1 className="bold" style={{ fontSize: "6rem" }}>
            {contents['locnam']}
          </h1>
          <h2 style={{ fontSize: "3rem", marginBottom: "8rem" }}>
            {contents['locex']}
          </h2>
          <CheezeTiket name={contents['locnam']} address={contents['locadd']} price={contents['locpri']}/>
          <GoogleMaps center={googlemaps} />
        </ContentBox>
        <LineGif />
        <h1 className="h1-border">COMMUNITY</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            padding: "20rem 42rem",
            gap: "2rem",
          }}
        >
          <ReverseBtn content={"REVIEW"} />
          <ReverseBtn content={"Q/A"} />
        </div>
      </> : <div>로딩중...</div>}
    </Container>
  );
};

export default LocDetail;
