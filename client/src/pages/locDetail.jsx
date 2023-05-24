import { useState, useEffect } from "react";
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
const Gradient = styled.div`
  width: 100%;
  height: 80rem;
  background: linear-gradient(transparent, 90%, black);
  opacity: 0.5;
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
  // location 위도 경도
  let [location, setLocation] = useState({
    lat: 43.198646330045015,
    lng: 140.99112959195782,
  });

  useEffect(() => {
    // 페이지 이동후 스크롤을 가장 위로 올림.
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Container>
      <div style={{ height: "108rem" }}>
        <Navbar />
        <Gradient />
      </div>
      <ContentBox>
        <Bookmark />
        <h1 className="bold" style={{ fontSize: "6rem" }}>
          후나미자카
        </h1>
        <h2 style={{ fontSize: "3rem", marginBottom: "8rem" }}>
          처음 영화가 시작될 때 우체부가 오토바이를 타고 언덕을 올라오는 장면
        </h2>
        <CheezeTiket />
        <GoogleMaps center={location} />
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
    </Container>
  );
};

export default LocDetail;
