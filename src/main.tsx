import { render } from "preact";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import "bulma/css/bulma.css";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")!
);
