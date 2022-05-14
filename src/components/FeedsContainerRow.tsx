import { useHistory, useRouteMatch } from "react-router";
import styles from "../styles/feedContainer.module.css";
import { ParsedContent } from "../types";

const { media, mediaRow, mediaTitle } = styles;

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
      <section className={media} onClick={() => toggleExpandedTab(match?.url)}>
        <div className={mediaTitle}>
          <h2>{contentInfo?.title}</h2>
          <h3>{contentInfo?.description}</h3>
        </div>
        <ul>
          {match?.url === routeVal &&
            contentItems.map(item => {
              return (
                <li>
                  <article key={Math.random()} className={mediaRow}>
                    <div className="media-left">
                      <p className="image is-16x16"></p>
                    </div>
                    <div>
                      <a
                        onClick={e => {
                          (e as any).stopImmediatePropagation();
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
