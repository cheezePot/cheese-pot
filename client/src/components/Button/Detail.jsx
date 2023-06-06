// 자세히 보기 button
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = (props) => {
  const navigate = useNavigate();

  return (
    <Container
      onClick={() => {
        navigate(`/locDetail/${props.locnum}`, {state: {locnum: props.locnum}});
      }}
    >
      자세히 보기
    </Container>
  );
};

const Container = styled.button`
  background-color: transparent;
  border: 0.2rem solid white;
  border-radius: 3rem;
  padding: 1rem 2.5rem;
  color: white;
`;
export default Detail;
