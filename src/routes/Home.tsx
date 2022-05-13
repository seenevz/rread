import { useEffect, useState } from "preact/hooks";
import EmptyFeed from "../components/EmptyFeed";
import FeedsContainer from "../components/FeedsContainer";
import { FeedsList } from "../types";
import { getFeeds } from "../utils";

export default function Home() {
  const [feeds, setFeeds] = useState<FeedsList>([]);

  useEffect(() => {
    (async (): Promise<void> => {
      setFeeds(await getFeeds());
    })();
  }, []);

  return <>{feeds.length ? <FeedsContainer feeds={feeds} /> : <EmptyFeed />}</>;
}
