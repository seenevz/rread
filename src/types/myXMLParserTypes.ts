export type ParsedContent = {
  contentInfo: ContentInfo;
  contentItems: ContentItemList;
};

export type ParsedContentList = ParsedContent[];

export type ContentInfo = {
  title: string;
  link: string;
  description: string;
};

export type ContentItem = {
  title: string;
  link: string;
  description: string;
};

export type ContentItemList = ContentItem[];

export type rootNode = Document | Element;
