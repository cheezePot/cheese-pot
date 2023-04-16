import React from "react";
import { useState } from "react";
import styled from "styled-components";
import CatelogyItem from "../components/List/CatelogyItem";

const main = () => {
  return (
    <div>
      <div style={{ backgroundColor: "black", height: "980px" }}>
        <h1 style={{ color: "white", textAlign: "center" }}>CHEEZEPOT</h1>
        <h1 style={{ fontFamily: "GravityPoints" }}>SEARCH</h1>
        <h1>CATEGORY</h1>
      </div>
      <div style={{ height: "100px", backgroundColor: "#F8F755" }}>
        cheese pot gif 들어갈 자리
      </div>
      <div style={{ backgroundColor: "black", height: "980px" }}>
        <SearchTitle>SEARCH</SearchTitle>
        <h1>CATEGORY</h1>
      </div>
      <div
        style={{
          backgroundColor: "black",
          height: "980px",
          paddingLeft: "10rem",
        }}
      >
        <CategoryTitle>CATELOGY</CategoryTitle>
        <h1>CATEGORY</h1>
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
  color: transparent;
`;

const CategoryTitle = styled.h1`
  font-family: GravityPoints;
  color: white;
`;
export default main;
