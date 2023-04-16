import React from "react";
import { useState } from "react";
import styled from "styled-components";

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
        <NavTitle>SEARCH</NavTitle>
        <h1>CATEGORY</h1>
      </div>
    </div>
  );
};

const NavTitle = styled.h1`
  font-family: GravityPoints;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: var(--main-color);
  color: transparent;
`;
export default main;
