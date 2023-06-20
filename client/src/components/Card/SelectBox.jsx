// 드롭박스
import styled from "styled-components";
import "./SelectBoxStyle.css";

const Select = styled.select`
  width: 15rem;
  background: black;
  color: var(--main-color);
  border: 3px solid var(--main-color);
  padding: 1.2rem;
  border-radius: 3rem;
  transition: 0.3s;
  &:hover{
    background: var(--main-color);
    color: black;
  }
`;
const SelectBox = () => {
  return (
    <div>
      <div class="selectBox">
        <Select name="fruits">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          <span class="icoArrow" style={{ paddingRight: "0.3rem" }}>
            <img
              src="https://freepikpsd.com/media/2019/10/down-arrow-icon-png-7-Transparent-Images.png"
              alt=""
            />
          </span>
        </Select>
      </div>
    </div>
  );
};
export default SelectBox;
