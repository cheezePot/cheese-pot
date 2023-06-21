import React, { useState } from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

const Container = styled.div`
    width: 15rem;
    background: black;
    color: var(--main-color);
    font-size: 1.5rem;
    font-family: GmarketSansBold;
    border: 3px solid var(--main-color);
    padding: 1.6rem 2rem;
    border-radius: 3rem;
    transition: 0.3s;
    ${props => props.isOn ? `
    &:hover {
      background: var(--main-color);
      color: black;
    }
  ` : null}
  z-index: 20;
`;

const Options = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    gap: 3rem;
`

const Option = styled.div`
    color: var(--main-color);
    opacity: 0.8;
`
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const [Selected, setSelected] = useState("");
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  const selectList = ["MOVIE", "DRAMA", "ANIME"];
  // const selectList = [
  //   {"드라마" : "DRAMA"}, 
  //   {"영화" : "MOVIE"}, 
  //   {"애니메이션" : "ANIME"}
  // ];

  return (
    <Container isOpen={isOpen} onChange={handleSelect}>
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedOption || '카테고리'}
        <span className={`arrow ${isOpen ? 'open' : ''}`} style={{float: 'right'}}>
            <img src="/images/dropdownArrow.png" alt="" />
        </span>
      </div>
      {isOpen && (
        <Options>
          {selectList.map((item) => (
            <Option value={item} key={item} onClick={() => {handleOptionSelect(item); navigate(`/selectPage/${item}`, {state:{content : item}})}} >
              {item}
            </Option>
            ))
          }
        </Options>
      )}
    </Container>
  );
};

export default Dropdown;