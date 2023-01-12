import React from 'react'
import styled from 'styled-components'
import { ReactComponent as IconDown } from '../assets/down.svg'
import { ReactComponent as IconSettings } from '../assets/settings.svg'

const StyledMessage = styled.div`
    width: 40%;
    height: 300px;
    display: flex;
    align-items: center;
    position: absolute;
    background-color: rgb(245, 245, 240);
    top: 75%;
    -moz-box-shadow: 0 0 5px #999;
    -webkit-box-shadow: 0 0 5px #999;
    box-shadow: 0 0 5px #999;
    .divs {
        width: 100%;
        height: 50px;
        background-color: white;
        position: absolute;
        display: flex;
    }
    .titleHeader {
        width: 20%;
        height: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        padding: 8px;
        left: 10px;
    }
    h2 {
        font-size: 18px;
        justify-content: start;
    }

    #header {
        top: 0px;
        border-bottom: 1px solid lightgrey;
    }
    #footer {
        bottom: 0px;
        border-top: 1px solid lightgrey;
        background-color: rgb(245, 245, 240);
    }
    input,
    button {
        position: absolute;
        height: 30px;
        bottom: 7px;
        border: none;
        -moz-box-shadow: 0 0 5px #999;
        -webkit-box-shadow: 0 0 5px #999;
        box-shadow: 0 0 5px #999;
    }
    input {
        width: 70%;
        left: 10px;
        padding: 12px 20px;
    }
    button {
        right: 10px;
        width: 20%;
        background-color: LightGray;
    }
    .sendTextTo {
        height: 200px;
        background-color: white;
        position: absolute;
        display: flex;

        left: 0;
        right: 0;
        border-radius: 5px;
    }
    button:hover {
        background-color: gray;
        cursor: pointer;
    }
    .icons {
        width: 80%;
        height: 100%;
        display: flex;
        justify-content: end;
        align-items: center;
        padding: 10px;
    }
    .icon {
        width: 10%;
        height: 100%;
        display: flex;
        justify-content: end;
        align-items: center;
    }
    #icon3 {
        width: 30%;
    }
`

const Message = () => {
    return (
        <StyledMessage>
            <div className="divs" id="header">
                <div className="titleHeader">
                    <h2>Message</h2>
                </div>
                <div className="icons">
                    <div className="icon" id="icon1">
                        <IconDown />
                    </div>
                    <div className="icon" id="icon2">
                        <IconSettings />
                    </div>
                </div>
            </div>
            <div className="divs" id="footer">
                <input type="text" placeholder="Type message..." />
                <button type="submit">Send</button>
            </div>
            <div className="sendTextTo"></div>
        </StyledMessage>
    )
}
export default Message
