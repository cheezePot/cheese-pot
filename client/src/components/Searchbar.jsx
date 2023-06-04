import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  width: 45rem;
  border: 0.3rem solid var(--main-color);
  border-radius: 4rem;
  padding: 2rem 4rem;
  background-color: transparent;
  font-size: 1.8rem;
  font-weight: bold;
  overflow: hidden;
`;

const Icon = styled.div`
  width: 3rem;
  height: 3rem;
  right: 6rem;
  background-image: url("/images/searchIcon.png");
  background-position: center;
  position: relative;
  cursor: pointer;
`;

const Searchbar = (props) => {
  return (
    <Container>
      <Input placeholder="검색어를 입력해주세요" value={props.value} onChange={props.onChange} 
        onKeyDown={(e)=>{if(e.key==="Enter") props.handleSearch()}}/> 
      <Icon onClick={props.handleSearch}/> {/* 돋보기 아이콘 */}
    </Container>
  );
};

export default Searchbar;
