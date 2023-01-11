import '../App.css'
import Hls from './Hls'
import styled from 'styled-components'

const StyledVideo = styled.div`
    width: 40%;
    height: 900px;
    display: flex;
`
function Video() {
    return (
        <StyledVideo>
            <Hls
                videoLink={'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'}
            />
        </StyledVideo>
    )
}

export default Video
