import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import LocItem from "../components/List/LocItem";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  margin: 0;
  text-align: left;
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
  background-color: red;
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
          <div className="h1-style">
            DRAMA
            <br />
            TITLE
          </div>
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