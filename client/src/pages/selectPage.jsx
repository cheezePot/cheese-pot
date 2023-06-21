import React, { useState, useEffect, Suspense} from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from 'axios';
import Navbar from "../components/Navbar";
import MediaItem from "../components/List/MediaItem";
import SelectBox from "../components/Card/SelectBox";
import DetailAlart from "../components/Card/DetailAlart";
import Dropdown from "../components/Card/Dropdown";
import SearchbarSelect from "../components/SearchbarSelect";

const Container = styled.div`
  background-color: black;
  height: 100vh;
  padding-bottom: 5rem;
`;

const Main = styled.div`
  padding: 0 37rem;
  font-family: GmarketSansLight;
  background: black;
`;

const SubNavbar = styled.div`
  height: 2rem;
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
  height: 100%;
  background-color: black;
  margin-top: 5.5rem;
  display: flex;
  row-gap: 4.5rem;
  column-gap: 1.2rem;
  flex-wrap: wrap;
`;

const SelectPage = (props) => {
  const [contents, setContents] = useState();
  const [panding, setPanding] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); // 검색 query
  const { pathname } = useLocation();
  const location = useLocation();
  const content = location.state.content; // 현재 무슨 콘텐츠?
  const [count, setCount] = useState(); // 총 본 영화 갯수가 몇인지
  const [isAlart, setIsAlart] = useState(false); //alart창이 띄워지는가?
  const [index, setIndex] = useState(-1);
  const [result, setResult] = useState();
  
  // api가져오기
  const getContents = () => {
    axios.get(`http://localhost:5000/api/content/${content}`)
    .then((res) => {
      // console.log(res.data);
      setContents(res.data);
      if(res.data==="") //일치하는 검색결과가 없다면
        console.log("검색결과 없음")
      setCount(Object.keys(res.data).length)
      setPanding(true);
    })
  }
  
  useEffect(()=>{
    getContents();
  },[])

    useEffect(() => {
      // 페이지 이동후 스크롤을 가장 위로 올림.
      window.scrollTo(0, 0);
    }, [pathname]);
    
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    if(event.target.value === "") {
      getContents();
    }
  };

  const handleSearch = () => {
    axios.get(`http://localhost:5000/search?search=${searchTerm}&conca=${content}`)
      .then((res) => {
        setContents(res.data);
      })
      .catch((error) => {
        console.error('검색 요청 오류:', error);
      });
  }
  return (
    <Container>
      {isAlart ? <DetailAlart contents={contents} title={contents[index]["contit"]} index={index} click={()=>{setIsAlart(false)}} /> : null}
        <Navbar />
        <Main>
          <h1 className="h1-style">{content}</h1>
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
              {content}
            </h2>
            <Selectors>
              {/* <SelectBox /> */}
              {/* 콘텐츠 가나다순 개봉일순 장르순 */}
              <Dropdown/>
              <Dropdown/>
              <SearchbarSelect handleSearch={handleSearch} onChange={handleInputChange}/>
            </Selectors>
          </SubNavbar>
          <Suspense fallback={<p>Loading user details...</p>}>
            <MediaContainer>
              {/* 향후 db에서 map함수 사용 */}
              {panding ? 
              contents.map((a, i)=>{
                return(
                  <MediaItem click={()=>{ 
                    setIsAlart(true);
                    setIndex(i)
                    }}
                  title={contents[i]["contit"]} imageUrl={contents[i]["titconlin"]}/>
                )
              }): <div>로딩중...</div>}
            </MediaContainer>
          </Suspense>
        </Main>
      </Container>
  );
};

export default SelectPage;
