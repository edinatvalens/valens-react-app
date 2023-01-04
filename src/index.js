import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import styled from 'styled-components';

const StyledRoot = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StyledRoot>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StyledRoot>
);


