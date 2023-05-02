import React from "react";
import { useState } from "react";
import styled from "styled-components";
import CatelogyItem from "../components/List/CatelogyItem";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import LineGif from "../components/LineGif";

const main = () => {
  return (
    <div>
      {/* main */}
      <div
        style={{
          backgroundColor: "black",
          height: "98rem",
        }}
      >
        {/* navbar수정해야함. */}
        <Navbar />
        <img
          src={process.env.PUBLIC_URL + "images/cheezeLogoMain.png"}
          alt="cheezeLogo"
          style={{ position: "relative", left: "18%" }}
        />
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
            backgroundColor: "red",
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
export default main;
