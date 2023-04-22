import styled from "styled-components";

const Searchbar = () => {
  return (
    <Container>
      <Input placeholder="검색어를 입력해주세요"></Input>
      <Icon>icon</Icon>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  border: 3px solid var(--main-color);
  border-radius: 2.5rem;
  padding: 1.2rem 2rem;
  background-color: transparent;
  width: 32rem;
  font-size: 1.1rem;
  overflow: hidden;
`;

const Icon = styled.div`
  position: relative;
  right: 4rem;
`;

export default Searchbar;
