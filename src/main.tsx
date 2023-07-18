import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import './index.css'
const GlobalStyle = createGlobalStyle`
#root {
  display: flex;
  justify-content: center;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color-scheme: light dark;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  width: 100vw;
  color: rgba(255, 255, 255, 0.87);
  margin-bottom: 20px;
}
body {
  background-color: #242424;
  margin-top: calc(max(4vw, 32px));
  display: flex;
  min-width: 320px;
  min-height: 100vh;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
footer {
  text-align: center;
  background-color: #242424;
  width: 100%;
  z-index: 999;
  position: fixed;
  bottom: 0;
}
a {
  all: unset;
  cursor: pointer;
}

`;
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
)
