import React from "react";
import { render } from "react-dom";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Alo from "./Test";

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

const Rooted = () => (
  <AlertProvider template={AlertTemplate} {...options}>
    <Alo />
  </AlertProvider>
);

render(<Rooted />, document.getElementById("root"));
