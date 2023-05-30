import styled from "styled-components";

const MediaItem = (props) => {
  return (
    <div onClick={props.click}>
      <MediaImage
        style={{
          backgroundImage: `url(${props.imageUrl})`,
          objectFit: "fill",
        }}
      />
      <h2 style={{ marginTop: "3rem" }}>{props.title}</h2>
    </div>
  );
};

const MediaImage = styled.div`
  width: 38rem;
  height: 38rem;
  border-radius: 1.2rem;
  background-position: center;
  background-size: cover;
`;
export default MediaItem;
