import { useHistory, useRouteMatch } from "react-router";
import { ParsedContent } from "../types";

type FeedsContainerRowProps = {
  feedContent: ParsedContent;
  routeVal: string;
  toggleExpandedTab(currUrl: string | undefined): void;
};

export default function FeedsContainerRow({
  feedContent: { contentInfo, contentItems },
  routeVal,
  toggleExpandedTab,
}: FeedsContainerRowProps) {
  const match = useRouteMatch("/feeds/:feedId");
  const { push } = useHistory();

  return (
    <>
      <article class="media">
        <div class="media-content" onClick={() => toggleExpandedTab(match?.url)}>
          <div class="content">
            <h2 class="title is-6">{contentInfo?.title}</h2>
            <h3 class="subtitle is-6">{contentInfo?.description}</h3>
          </div>
          {match?.url === routeVal &&
            contentItems.map(item => {
              return (
                <article key={Math.random()} class="media">
                  <div class="media-left">
                    <p class="image is-16x16"></p>
                  </div>
                  <div class="media-content">
                    <div class="content">
                      <a
                        onClick={() => {
                          push(item?.link, { link: item?.link });
                        }}>
                        {item?.title}
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
        </div>
      </article>
    </>
  );
}
