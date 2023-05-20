// Review / Q&A toggle button
import styled from "styled-components";
import { useState } from "react";

const Container = styled.button`
  width: 38rem;
  height: 10rem;
  border-radius: 2rem;
  padding: 1rem 1.8rem;
  border: 0.3rem solid var(--main-color);
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

const ReverseBtn = (props) => {
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
      {props.content}
    </Container>
  );
};

export default ReverseBtn;
