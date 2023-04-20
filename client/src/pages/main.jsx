import React from "react";
import { useState } from "react";
import styled from "styled-components";
import CatelogyItem from "../components/List/CatelogyItem";
import Navbar from "../components/Navbar";

const main = () => {
  return (
    <div>
      <div style={{ backgroundColor: "black", height: "980px" }}>
        <Navbar />
        <h1
          style={{
            color: "white",
            textAlign: "center",
            fontFamily: "GravityPoints",
          }}
        >
          CHEEZEPOT
        </h1>
      </div>
      <div style={{ height: "100px", backgroundColor: "var(--main-color)" }}>
        cheese pot gif 들어갈 자리
      </div>
      <div style={{ backgroundColor: "black", height: "980px" }}>
        <SearchTitle>SEARCH</SearchTitle>
      </div>
      <div style={{ height: "100px", backgroundColor: "var(--main-color)" }}>
        cheese pot gif 들어갈 자리
      </div>
      <div
        style={{
          backgroundColor: "black",
          height: "980px",
          paddingLeft: "10rem",
        }}
      >
        <CategoryTitle>CATELOGY</CategoryTitle>
        <div style={{ display: "flex", gap: "4rem" }}>
          <CatelogyItem title={"MOVIE"} />
          <CatelogyItem title={"DRAMA"} />
          <CatelogyItem title={"ANIME"} />
        </div>
      </div>
    </div>
  );
};

const SearchTitle = styled.h1`
  font-family: GravityPoints;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: var(--main-color);
  padding-top: 300px;
  color: transparent;
`;

const CategoryTitle = styled.h1`
  padding: 200px 0 160px 0;
  font-family: GravityPoints;
  color: white;
`;
export default main;
