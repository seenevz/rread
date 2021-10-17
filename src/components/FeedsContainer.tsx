import { useEffect, useState } from "preact/hooks";
import { useHistory, useLocation, useRouteMatch } from "react-router";
import { FeedsList, ParsedContentList } from "../types";
import { getParsedFeedContent } from "../utils";
import FeedsContainerRow from "./FeedsContainerRow";

type FeedsContainerProps = {
  feeds: FeedsList;
};

export default function FeedsContainer({ feeds }: FeedsContainerProps) {
  const [feedsContent, setFeedsContent] = useState<ParsedContentList>([]);
  const {
    push,
    location: { state },
  } = useHistory();
  const { path, url } = useRouteMatch();

  useEffect(() => {
    (async (): Promise<void> => {
      const feedsStrings = await Promise.all(
        feeds.map(async feed => {
          return await getParsedFeedContent(feed.url, feed.id);
        })
      );
      setFeedsContent(feedsStrings);
    })();
  }, [feeds]);

  return (
    <section>
      {feedsContent.map(feed => {
        const routeVal = `${path}/${feed.id}`;

        const triggerRoute = (currUrl: string) => {
          push(routeVal === currUrl ? url : routeVal);
        };
        return (
          <FeedsContainerRow
            key={Math.random() * Date.now()}
            feedContent={feed}
            routeVal={routeVal}
            toggleExpandedTab={triggerRoute}
          />
        );
      })}
    </section>
  );
}
