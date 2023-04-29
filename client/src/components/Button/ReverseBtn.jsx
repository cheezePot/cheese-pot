import styled from "styled-components";
import { useState } from "react";

const Container = styled.button`
  width: 380px;
  height: 100px;
  border-radius: 20px;
  padding: 1rem 1.8rem;
  border: 3px solid var(--main-color);
  font-size: 3rem;
  background-color: black;
  transition: linear 0.3s;

  &.toggle--checked {
    color: black;
    background-color: var(--main-color);
    border: none;
    margin: 0;
  }
`;

const ReverseBtn = () => {
  const [isOn, setisOn] = useState(false);

  const toggleHandler = () => {
    // isOn의 상태를 변경하는 메소드를 구현
    setisOn(!isOn);
  };
  return (
    <Container
      onClick={toggleHandler}
      className={`toggle-container ${
        isOn ? `toggle--checked h1-style` : "h1-border"
      }`}
    >
      REVIEW
    </Container>
  );
};

export default ReverseBtn;
