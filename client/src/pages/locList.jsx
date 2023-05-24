import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const LocList = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Container>
      <Navbar />
      <div style={{ padding: "0 37rem" }}>
        <Top>
          <div className="h1-style">노다메 칸타빌레</div>
          <Image />
        </Top>
      </div>
      <LocItem />
      <LocItem />
      <LocItem />
      <LocItem />
    </Container>
  );
};

export default LocList;
