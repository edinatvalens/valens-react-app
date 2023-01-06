import styled from 'styled-components'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import Video from './Video'
import NotFound from './NotFound'

const StyledApp = styled.div`
    text-align: center;
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
`

function App() {
    return (
        <StyledApp>
            <Router>
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="/video" element={<Video />}></Route>
                    <Route exact path="*" element={<NotFound />}></Route>
                </Routes>
            </Router>
        </StyledApp>
    )
}

export default App
