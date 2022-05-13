import { Redirect, Route, Switch } from "react-router";
import Header from "./components/Header";
import Article from "./routes/Article";
import Feeds from "./routes/Feeds";

export function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/feeds">
          <Feeds />
        </Route>
        <Route path="/article">
          <Article />
        </Route>
        <Route path="/">
          <Redirect to="/feeds" />
        </Route>
      </Switch>
    </>
  );
}
