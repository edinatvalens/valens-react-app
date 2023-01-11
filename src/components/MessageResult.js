import React from 'react'
import styled from 'styled-components'

const StyledResults = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    justify-content: start;
`

const MessageResult = () => {
    return (
        <StyledResults>
            <p>Samo message</p>
        </StyledResults>
    )
}
export default MessageResult
