import { Redirect, Route, Switch } from "react-router";
import Header from "./components/Header";
import Article from "./routes/Article";
import Home from "./routes/Home";

export function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/feeds">
          <Home />
        </Route>
        <Route path="/article">
          <Article />
        </Route>
      </Switch>
    </>
  );
}
