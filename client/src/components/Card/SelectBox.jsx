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
`;
const SelectBox = () => {
  return (
    <div>
      <div class="selectBox">
        <Select name="fruits">
          <option disabled selected>
            카테고리
          </option>
          <option value="apple">드라마</option>
          <option value="orange">영화</option>
          <option value="grape">애니메이션</option>
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
