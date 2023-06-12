import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  width: 18rem;
  height: 1.3rem;
  border: 0.3rem solid var(--main-color);
  border-radius: 4rem;
  padding: 2rem 3rem;
  background-color: #272727;
  font-size: 1.8rem;
  font-weight: bold;
  overflow: hidden;
`;

const Searchbar = (props) => {
  return (
    <Container>
      <Input placeholder="검색하세요" value={props.value} onChange={props.onChange} 
        onKeyDown={(e)=>{if(e.key==="Enter") props.handleSearch()}}/> 
    </Container>
  );
};

export default Searchbar;
