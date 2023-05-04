import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import CatelogyItem from "../components/List/CatelogyItem";
import Navbar from "../components/Navbar";
import MediaItem from "../components/List/MediaItem";
import SelectBox from "../components/Card/SelectBox";
import DetailAlart from "../components/Card/DetailAlart";
import Info from "../components/Button/Info";
import ReverseBtn from "../components/Button/ReverseBtn";

const Container = styled.div`
  background-color: black;
  height: 120%;
`;

const Main = styled.div`
  padding: 0 37rem;
  font-family: GmarketSansLight;
`;

const SubNavbar = styled.div`
  display: flex;
  margin-top: 13rem;
  align-items: center;
`;

const Selectors = styled.div`
  display: flex;
  margin-left: auto;
  gap: 2rem;
`;
const MediaContainer = styled.div`
  margin-top: 5.5rem;
  display: flex;
  row-gap: 4.5rem;
  column-gap: 1.2rem;
  flex-wrap: wrap;
`;

const SelectPage = () => {
  const { pathname } = useLocation();
  const [count, setCount] = useState(5); // 총 본 영화 갯수가 몇인지

  useEffect(() => {
    // 페이지 이동후 스크롤을 가장 위로 올림.
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Container>
      <Navbar />
      <Main>
        <h1 className="h1-style">MOVIE</h1>
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
            MOVIES
          </h2>
          <Selectors>
            <SelectBox />
            <SelectBox />
            <SelectBox />
          </Selectors>
        </SubNavbar>
        <MediaContainer>
          {/* 향후 db에서 map함수 사용 */}
          <MediaItem onClick={() => {}} />
          <MediaItem />
          <MediaItem />
          <MediaItem />
          <MediaItem />
        </MediaContainer>
      </Main>
      <DetailAlart />
      <Info />
    </Container>
  );
};

export default SelectPage;
