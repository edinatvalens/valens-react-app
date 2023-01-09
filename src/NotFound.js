import React from 'react'
import styled from 'styled-components'

const StyledNotFound = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 400px;
    background-color: white;

    h1 {
        color: black;
        font-size: 20px;
        font-weight: bold;
    }
`
const NotFound = () => {
    return (
        <StyledNotFound>
            <h1>404 Not Found</h1>
        </StyledNotFound>
    )
}

export default NotFound
