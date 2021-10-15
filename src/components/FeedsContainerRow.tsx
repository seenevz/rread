import { ExpandedTab, ParsedContent } from "../types";

type FeedsContainerRowProps = {
  feedContent: ParsedContent;
  expandedTab: ExpandedTab;
  toggleExpandedTab(tabLink: string): void;
};

export default function FeedsContainerRow({
  feedContent: { contentInfo, contentItems },
  expandedTab,
  toggleExpandedTab,
}: FeedsContainerRowProps) {
  // const isCurrentTab = expandedTab === contentInfo.link;
  console.log(expandedTab);

  return (
    <>
      <article class="media">
        <div class="media-content" onClick={() => toggleExpandedTab(contentInfo?.link)}>
          <div class="content">
            <h2 class="title is-6">{contentInfo?.title}</h2>
            <h3 class="subtitle is-6">{contentInfo?.description}</h3>
          </div>
          {expandedTab &&
            contentItems.map(item => {
              return (
                <article key={Math.random()} class="media">
                  <div class="media-left">
                    <p class="image is-16x16"></p>
                  </div>
                  <div class="media-content">
                    <div class="content">
                      <a href={item?.link}>{item?.title}</a>
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
