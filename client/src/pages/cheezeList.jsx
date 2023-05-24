import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import SelectBox from "../components/Card/SelectBox";
import BookmarkList from "../components/List/BookmarkList";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  margin: 0;
  padding-bottom: 10rem;
  text-align: left;
  overflow: hidden;
`;
const Main = styled.div`
  padding: 0 37rem;
  font-family: GmarketSansLight;
`;
const SubNavbar = styled.div`
  display: flex;
  margin: 13rem 0 7rem 0;
  align-items: center;
`;
const Selectors = styled.div`
  display: flex;
  margin-left: auto;
  gap: 2rem;
`;

const ListContainer = styled(SubNavbar)`
  gap: 2rem;
`;
const LocList = () => {
  const { pathname } = useLocation();
  const [count, setCount] = useState(5); // 북마크한 장소의 갯수

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Container>
      <Navbar />
      <Main>
        <h1 className="h1-style">CHEEZE LIST</h1>
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
            LIST
          </h2>
          <Selectors>
            <SelectBox />
            <SelectBox />
            <SelectBox />
          </Selectors>
        </SubNavbar>
        <ListContainer>
          <BookmarkList />
          <BookmarkList />
          <BookmarkList />
          <BookmarkList />
        </ListContainer>
      </Main>
    </Container>
  );
};

export default LocList;
