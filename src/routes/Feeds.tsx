import { useEffect, useState } from "preact/hooks";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AddFeed from "../components/AddFeed";
import EmptyFeed from "../components/EmptyFeed";
import FeedsContainer from "../components/FeedsContainer";
import { FeedsList } from "../types";
import { getFeeds } from "../utils";

export default function Feeds() {
  const [feeds, setFeeds] = useState<FeedsList>([]);
  const { url } = useRouteMatch();

  useEffect(() => {
    (async (): Promise<void> => {
      setFeeds(await getFeeds());
    })();
  }, []);

  return (
    <Switch>
      <Route path={`${url}/add`}>
        <AddFeed />
      </Route>
      <Route path={`${url}/`}>
        {feeds.length ? <FeedsContainer feeds={feeds} /> : <EmptyFeed />}
      </Route>
    </Switch>
  );
}
