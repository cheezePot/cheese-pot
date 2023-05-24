import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CatelogyItem from "../components/List/CatelogyItem";
import Searchbar from "../components/Searchbar";
import LineGif from "../components/LineGif";

const Gradient = styled.div`
  width: 100%;
  height: 80rem;
  background: linear-gradient(transparent, 90%, var(--main-color));
  opacity: 0.5;
  position: absolute;
  z-index: 3;
`;
const CategoryTitle = styled.h1`
  font-family: GravityPoints;
  color: white;
  font-size: 3rem;
  font-weight: normal;
`;

const CategoryHeader = styled.div`
  display: flex;
  padding: 20rem 0 16rem 0;
  column-gap: 30vw;
`;

const MainNavbar = styled.div`
  margin-left: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7rem 0 4rem 0;
  margin-left: auto; // 오른쪽으로 붙이기
  gap: 2rem;
`;

const Linked = styled.div`
  font-family: GravityPoints;
  font-size: 0.8rem;
  color: white;
  position: relative;
  list-style-type: none;
  cursor: pointer;
`;

const Main = () => {
  const navigate = useNavigate();
  return (
    <div style={{ overflow: "hidden" }}>
      {/* main */}
      <div
        style={{
          backgroundColor: "black",
          width: "100vw",
          height: "98rem",
          zIndex: "-1",
        }}
      >
        {/* navbar */}
        <MainNavbar>
          <Linked>CATEGORY</Linked>
          <Linked
            onClick={() => {
              navigate("/cheezeList");
            }}
          >
            CHEEZE LIST
          </Linked>
        </MainNavbar>
        {/* navbar */}
        <img
          src={process.env.PUBLIC_URL + "images/cheezeLogoMain.png"}
          alt="cheezeLogo"
          style={{ position: "relative", left: "18%" }}
        />
        <Gradient />
      </div>
      {/* main */}
      <LineGif />
      {/* search container */}
      <div
        style={{
          backgroundColor: "black",
          height: "108rem",
          paddingLeft: "37rem",
        }}
      >
        <h1 className="h1-border" style={{ marginBottom: "6rem" }}>
          SEARCH
        </h1>
        <div
          style={{
            width: "58rem",
            height: "58rem",
            backgroundImage: "url(images/searchAsset.gif)",
            backgroundRepeat: "no-repeat",
            float: "left",
          }}
        ></div>
        <Searchbar />
      </div>
      <LineGif />
      {/* category container */}
      <div
        style={{
          backgroundColor: "black",
          height: "98rem",
          paddingLeft: "37rem",
        }}
      >
        <CategoryHeader>
          <CategoryTitle>CATEGORY</CategoryTitle>
          <div>
            <img src={process.env.PUBLIC_URL + "/images/moreButton.png"} />
          </div>
        </CategoryHeader>
        <div style={{ display: "flex", columnGap: "4rem" }}>
          <CatelogyItem title={"MOVIE"} />
          <CatelogyItem title={"DRAMA"} />
          <CatelogyItem title={"ANIME"} />
        </div>
      </div>
    </div>
  );
};

export default Main;
