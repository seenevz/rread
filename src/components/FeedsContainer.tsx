import { useEffect, useState } from "preact/hooks";
import { ExpandedTab, FeedsList, ParsedContentList } from "../types";
import { getParsedFeedContent } from "../utils";
import FeedsContainerRow from "./FeedsContainerRow";

type FeedsContainerProps = {
  feeds: FeedsList;
};

export default function FeedsContainer({ feeds }: FeedsContainerProps) {
  const [feedsContent, setFeedsContent] = useState<ParsedContentList>([]);
  // const [expandedTab, setExpandedTab] = useState<ExpandedTab>(null);

  useEffect(() => {
    (async (): Promise<void> => {
      const feedsStrings = await Promise.all(
        feeds.map(async feed => {
          return await getParsedFeedContent(feed.url);
        })
      );
      setFeedsContent(feedsStrings);
    })();
  }, [feeds]);

  // const toggleExpandedTab = (tabLink: string): void => {
  //   setExpandedTab(curr => (curr === tabLink ? null : tabLink));
  // };

  return (
    <section>
      {feedsContent.map(feed => {
        const routeVal = Date.now() * Math.random();
        return (
          <FeedsContainerRow
            key={Math.random() * Date.now()}
            feedContent={feed}
            expandedTab={true}
            toggleExpandedTab={() => {
              console.log(`/feeds/${routeVal}`);
              // window.history.pushState(null, "", `/feeds/${routeVal}`);
            }}
          />
        );
      })}
    </section>
  );
}
