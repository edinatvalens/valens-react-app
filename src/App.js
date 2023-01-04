import './App.css';
import Hls from './Hls';
import styled from 'styled-components';

const StyledApp = styled.div`
  text-align: center;
  width: 40%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4%;
`;

function App() {
  return (
    <StyledApp>
        <Hls videoLink={"https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"} />
      
    </StyledApp>
  );
}


export default App;
