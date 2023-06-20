import React, { useState } from 'react';
import styled from 'styled-components';

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

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <Container isOpen={isOpen}>
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedOption || '카테고리'}
        <span className={`arrow ${isOpen ? 'open' : ''}`} style={{float: 'right'}}>
            <img src="/images/dropdownArrow.png" alt="" />
        </span>
      </div>
      {isOpen && (
        <Options>
          <Option onClick={() => handleOptionSelect('드라마')} >
          드라마
          </Option>
          <Option className="option" onClick={() => handleOptionSelect('영화')}>
          영화
          </Option>
          <Option className="option" onClick={() => handleOptionSelect('애니메이션')}>
          애니메이션
          </Option>
        </Options>
      )}
    </Container>
  );
};

export default Dropdown;