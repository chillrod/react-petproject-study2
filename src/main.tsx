import React from "react";
import ReactDOM from "react-dom";

// style section
import "./config/styles/reset.css";
import "./config/styles/basicTheme.css";
import { styled } from "./config/styles/themeToken/themeToken";
import { App } from "./modules/app/app";

// modules section

const AppWrapper = styled("div", {});

ReactDOM.render(
  <React.StrictMode>
    <AppWrapper>
      <App />
    </AppWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);
