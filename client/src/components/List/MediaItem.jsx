import styled from "styled-components";

const MediaItem = (props) => {
  return (
    <div>
      <MediaImage
        style={{
          backgroundImage: `url('https://image.cine21.com/resize/cine21/still/2019/0520/15_09_06__5ce24482300a7[W578-].jpg')`,
          objectFit: "fill",
        }}
      />
      <h2 style={{ marginTop: "3rem" }}>러브레터</h2>
    </div>
  );
};

const MediaImage = styled.div`
  width: 38rem;
  height: 38rem;
  border-radius: 1.2rem;
`;
export default MediaItem;
