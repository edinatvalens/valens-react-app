import React, { useEffect, useState } from 'react'
import ReactHlsPlayer from './video.tsx'
import styled from 'styled-components'

const StyledVideo = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10px;
        width: 100%;
        top: 20%;
        position: absolute;
    }
`

const Video = (videoLink) => {
    const [isPlaying, setIsPlaying] = useState(false)

    const play = () => setIsPlaying(true)
    const pause = () => setIsPlaying(false)

    return (
        <StyledVideo>
            <ReactHlsPlayer
                id="player"
                className="phone:w-4/5  content-center"
                src={videoLink}
                autoPlay={true}
                controls={true}
                isPlaying={isPlaying}
                onPlay={play}
                onPause={pause}
                muted
                width="100%"
                height="auto"
            />
            <h1>{isPlaying ? 'Video is playing...' : 'Video is paused...'}</h1>
        </StyledVideo>
    )
}
export default Video
