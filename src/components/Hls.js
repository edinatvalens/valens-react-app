import React, { useEffect, useRef, useState } from 'react'
import ReactHlsPlayer from '../video.tsx'
import styled from 'styled-components'
import Message from './Message'
import { ReactComponent as IconDown } from '../assets/down.svg'
import { ReactComponent as IconUp } from '../assets/up.svg'

const StyledVideo = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 70px;
    flex-direction: row;
    h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10px;
        width: 100%;
        top: 17%;
        position: absolute;
    }
    .showButton {
        width: 10%;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 27%;
    }
    .showMessage {
        width: 50%;
        height: 300px;
        background-color: red;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 75%;
        bottom: 0;
    }
`

const Video = (videoLink) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const playerRef = useRef()

    const playHandler = () => {
        setIsPlaying(true)
    }
    const pauseHandler = () => {
        setIsPlaying(false)
    }

    useEffect(() => {
        const elementRef = playerRef.current
        elementRef.addEventListener('play', playHandler)
        elementRef.addEventListener('pause', pauseHandler)
        return () => {
            elementRef.removeEventListener('play', playHandler)
            elementRef.removeEventListener('pause', pauseHandler)
        }
    }, [])

    const [show, setShow] = useState(() => {
        const savedItem = localStorage.getItem('show')
        const parsedItem = JSON.parse(savedItem)
        return parsedItem
    })
    const showClick = () => {
        setShow(!show)
    }

    useEffect(() => {
        localStorage.setItem('show', JSON.stringify(show))
    }, [show])

    return (
        <StyledVideo>
            <ReactHlsPlayer
                id="player"
                className="phone:w-4/5  content-center"
                src={videoLink}
                autoPlay={true}
                controls={true}
                playerRef={playerRef}
                muted
                width="100%"
                height="auto"
            />
            <h1>{isPlaying ? 'Video is playing...' : 'Video is paused...'}</h1>
            <div className="showButton">
                {show ? (
                    <IconDown
                        type="submit"
                        value="Show"
                        onClick={showClick}
                        cursor="pointer"
                        onChange={(e) => setShow(e.target.show)}
                    />
                ) : (
                    <IconUp
                        onClick={showClick}
                        onChange={(e) => setShow(e.target.show)}
                        cursor="pointer"
                    />
                )}
            </div>
            {!show ? <Message /> : null}
        </StyledVideo>
    )
}
export default Video
