import { useHistory, useRouteMatch } from "react-router";
import {
  media,
  mediaRow,
  mediaTitle,
} from "../styles/feedContainer.module.css";
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
      <section class={media} onClick={() => toggleExpandedTab(match?.url)}>
        <div class={mediaTitle}>
          <h2>{contentInfo?.title}</h2>
          <h3>{contentInfo?.description}</h3>
        </div>
        <ul>
          {match?.url === routeVal &&
            contentItems.map(item => {
              return (
                <li>
                  <article key={Math.random()} class={mediaRow}>
                    <div class="media-left">
                      <p class="image is-16x16"></p>
                    </div>
                    <div>
                      <a
                        onClick={e => {
                          e.stopImmediatePropagation();
                          push("/article", { link: item?.link });
                        }}>
                        {item?.title}
                      </a>
                    </div>
                  </article>
                </li>
              );
            })}
        </ul>
      </section>
    </>
  );
}
