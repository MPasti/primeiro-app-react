import React from "react";
import ReactDOM from "react-dom/client";
//retiramos o import "./index.css";
//não precisamos mais do css pq criamos um global
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  background: linear-gradient(-0deg, #f70f0f 50%, #f70f0f, #f70f0f);
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

li{
    list-style: none;
}

`;

//pagina que administra todo o app

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
