import React from 'react'
import styled from 'styled-components'
import NavBar from './NavBar'

const StyledHome = styled.div`
    width: 100%;
    height: auto;
    display: flex;
`
const Home = () => {
    return (
        <StyledHome>
            <NavBar />
        </StyledHome>
    )
}

export default Home
