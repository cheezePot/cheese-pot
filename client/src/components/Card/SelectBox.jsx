// 드롭박스
import styled from "styled-components";
import "./SelectBoxStyle.css";

const SelectBox = () => {
  return (
    <div>
      <div class="selectBox">
        <select name="fruits" class="select">
          <option disabled selected>
            카테고리
          </option>
          <option value="apple">드라마</option>
          <option value="orange">영화</option>
          <option value="grape">애니메이션</option>
        </select>
        <span class="icoArrow">
          <img
            src="https://freepikpsd.com/media/2019/10/down-arrow-icon-png-7-Transparent-Images.png"
            alt=""
          />
        </span>
      </div>
    </div>
  );
};
export default SelectBox;
