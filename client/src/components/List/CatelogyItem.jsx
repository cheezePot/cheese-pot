import { useNavigate } from "react-router-dom";
const CatelogyItem = (props) => {
  const navigate = useNavigate();
  const rightBoxStyle = {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    rowGap: "40px",
  };
  const h3Style = {
    fontFamily: "GravityPoints",
    fontWeight: "100",
    color: "var(--main-color)",
    position: "relative",
  };
  const buttonStyle = {
    backgroundColor: "transparent",
    padding: "13px 30px",
    border: "white 2px solid",
    borderRadius: "2.25rem",
    fontSize: "15px",
    color: "white",
  };

  return (
    <div
      style={{
        borderRadius: "1.25rem",
        border: "3px yellow solid",
        width: "580px",
        height: "300px",
      }}
    >
      <div style={{ width: "200px", height: "200px", float: "left" }}>
        사진 들어갈 자리
      </div>
      <div style={rightBoxStyle}>
        <h3 style={h3Style}>#{props.title}</h3>
        <button
          style={buttonStyle}
          onClick={() => {
            navigate("/selectPage");
          }}
        >
          리스트 보기
        </button>
      </div>
    </div>
  );
};

export default CatelogyItem;
