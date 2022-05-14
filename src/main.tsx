import { render } from "preact";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import styles from "./styles/base.module.css";

const { app } = styles;
const div = document.createElement("div");
div.id = app;
document.body.prepend(div);

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  div
);
