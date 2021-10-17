import { Redirect, Route, Switch } from "react-router";
import Header from "./components/Header";
import Home from "./routes/Home";

export function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/feeds">
          <Home />
        </Route>
        <Route path="/">
          <Redirect to="/feeds" />
        </Route>
      </Switch>
    </>
  );
}
