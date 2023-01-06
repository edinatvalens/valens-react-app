import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Video from './Video'
const StyledNavbar = styled.div`
    width: 100%;
    height: 10%;
    background-color: rgb(255, 255, 255);
    box-shadow: 5px 5px 5px rgb(235, 235, 224);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 10px;
    a {
        text-decoration: none;
        color: black;
        cursor: pointer;
        margin-left: 10px;
    }
`

const NavBar = () => {
    return (
        <StyledNavbar>
            <a href="http://localhost:3000/">Home</a>
            <a href="http://localhost:3000/video">Video</a>
        </StyledNavbar>
    )
}

export default NavBar
