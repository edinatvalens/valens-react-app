import styled from 'styled-components'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import NavBar from '../src/components/NavBar'
import Home from '../src/components/Home'
import Video from '../src/components/Video'
import NotFound from '../src/components/NotFound'

const StyledApp = styled.div`
    text-align: center;
    width: 100%;
    height: 100%;
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
