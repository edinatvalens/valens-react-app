import React from "react";
import ReactHlsPlayer from "./video.tsx";
import styled from "styled-components";

const StyledVideo = styled.div`
  width:100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const Video = (videoLink) => {
const playerRef = React.useRef();
  return (
    <StyledVideo>
      <ReactHlsPlayer
        id="player"
        className="phone:w-4/5  content-center"
        playerRef={playerRef}
        src={videoLink}
        autoPlay={true}
        controls={true}
        muted
        width="100%"
        height="auto"
      />
    </StyledVideo>
  );
};
export default Video;
