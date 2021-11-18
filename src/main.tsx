import React from "react";
import ReactDOM from "react-dom";
import { styled } from "./config/styles/themeToken/themeToken";

import "./config/styles/reset.css";

const AppWrapper = styled("div", {
  backgroundColor: `$purple1`,
});

ReactDOM.render(
  <React.StrictMode>
    <AppWrapper>hey</AppWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);
