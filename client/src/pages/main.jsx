import {useState, useEffect, useRef} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {styled} from "styled-components";
import CatelogyItem from "../components/List/CatelogyItem";
import Searchbar from "../components/Searchbar";
import LineGif from "../components/LineGif";
import TouchSlider from "../components/TouchSlider";

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

const CategoryContainer = styled.div`
  display: flex;
  column-gap: 4rem;
  transition: 0.5s;
  // transform: translateX(35rem);
`

const Main = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  // const category = useRef(); // category container ref
  // const [categoryStyle, setCategoryStyle] = useState();

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // 검색기능
    axios.get(`http://localhost:5000/search?search=${searchTerm}`)
      .then((res) => {
        console.log(res.data);
        setSearchResults(res.data);
      })
      .catch((error) => {
        console.error('검색 요청 오류:', error);
      });
  };
  /** 화살표 눌렀을 때 왼쪽으로 이동 */
  const [translateX, setTranslateX] = useState(0);

  const handleMoreButtonClick = () => {
    setTranslateX(prevTranslateX => prevTranslateX - 200); // 이전 translateX 값에서 200px 더 왼쪽으로 이동
  };
  /** 화살표 눌렀을 때 왼쪽으로 이동 */

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
          <Linked
            onClick={() => {
              navigate(`/selectPage/MOVIE`, {state:{content : 'MOVIE'}});
            }}>CATEGORY</Linked>
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
            float: "left",
          }}
        ></div>
        <Searchbar value={searchTerm} onChange={handleInputChange} handleSearch={handleSearch} visiable={true}/>
        <ul style={{margin: '10rem 0 0 80rem'}}>
          {searchResults.length!=0 ? 
                    searchResults.map((result) =>{
                      return(
                        <div style={{display: 'flex', alignItems: 'center'}}>
                          <div style={{fontSize: '3rem'}} key={result.id}>{result.contit}</div>
                          <img onClick={()=>{navigate(`/locList/${result.connum}`, { state: {title: result.contit } })}} style={{width: '8rem', cursor: 'pointer'}} src="https://static.vecteezy.com/system/resources/previews/014/441/338/original/external-link-icon-3d-design-for-application-and-website-presentation-png.png"/>
                        </div>
                      );
                    }
                  )
                : <div style={{fontSize: '3rem'}}>검색결과가 없습니다.</div>
          }
        </ul>
      </div>
      <LineGif />
      {/* category container */}
          <div
            style={{
              backgroundColor: "black",
              height: "98rem",
              paddingLeft: "37rem",
            }}>
          <CategoryHeader>
              <CategoryTitle>CATEGORY</CategoryTitle>
              <div style={{ cursor: 'pointer' }} onClick={handleMoreButtonClick}>
                <img src={process.env.PUBLIC_URL + "/images/moreButton.png"} />
              </div>
          </CategoryHeader>
          <div
            style={{
              transform: `translateX(${translateX}px)`,
              transition: 'transform 0.3s ease', // 애니메이션 지속 시간과 타이밍 함수 설정
            }}
          >
          <TouchSlider>
            <CategoryContainer>
              <CatelogyItem content={"MOVIE"} />
              <CatelogyItem content={"DRAMA"} />
              <CatelogyItem content={"ANIME"} />
            </CategoryContainer>
          </TouchSlider>
        </div>
      </div>
    </div>
  );
};

export default Main;
