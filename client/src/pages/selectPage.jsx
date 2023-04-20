import React from "react";
import { useState } from "react";
import "./selectPage.css";
import styled from "styled-components";
import CatelogyItem from "../components/List/CatelogyItem";
import Navbar from "../components/Navbar";
import SelectBox from "../components/SelectBox";
import MediaItem from "../components/MediaItem";

const containerStyle = {
  padding: "0 23rem",
  fontFamily: "GmarketSansLight",
};
const Main = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="entire-page">
      <Navbar />
      <div style={containerStyle}>
        <h1 className="h1-style">MOVIE</h1>
        <div
          style={{ display: "flex", marginTop: "13rem", alignItems: "center" }}
        >
          <h2>
            <span className="bold">{count}</span> MOVIES
          </h2>
          <div style={{ display: "flex", marginLeft: "auto", gap: "20px" }}>
            <SelectBox />
            <SelectBox />
            <SelectBox />
          </div>
        </div>
        <div className="container-item">
          {/* 향후 db에서 map함수 사용 */}
          <MediaItem />
          <MediaItem />
          <MediaItem />
          <MediaItem />
          <MediaItem />
        </div>
      </div>
    </div>
  );
};

export default Main;
