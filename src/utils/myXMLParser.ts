import { ContentInfo, ContentItem, ContentItemList, ParsedContent, rootNode } from "../types";

const parseXMLFromString = (stringDoc: string): Document => {
  const parser = new DOMParser();
  return parser.parseFromString(stringDoc, "text/xml");
};

const getNodeFromTag = (node: string, rootNode: rootNode): Element | null => {
  return rootNode.querySelector(node);
};

const getDataFromGroup = (tagGroup: string[], rootNode: rootNode): ContentInfo => {
  const data = {} as ContentInfo & { [key: string]: string | null | undefined };
  tagGroup.forEach(node => (data[node] = getNodeFromTag(node, rootNode)?.textContent));

  return data;
};

const getNodesFromTag = (tag: string, rootNode: rootNode): NodeListOf<Element> => {
  return rootNode.querySelectorAll(tag);
};

const getContentInfo = (document: Document): ContentInfo => {
  const nodesToSearch = ["title", "link", "description"];

  return getDataFromGroup(nodesToSearch, document);
};

const getContentItem = (element: Element): ContentItem => {
  const nodesToSearch = ["title", "link", "description"];

  return getDataFromGroup(nodesToSearch, element);
};

const getContentItems = (document: Document): ContentItemList => {
  const nodes = getNodesFromTag("item", document);
  const data = [] as ContentItemList;

  nodes.forEach(node => {
    data.push(getContentItem(node));
  });

  return data;
};

export const getDataFromXML = (stringDoc: string): ParsedContent => {
  const parsed = parseXMLFromString(stringDoc);
  const contentInfo = getContentInfo(parsed);
  const contentItems = getContentItems(parsed);

  return {
    contentInfo,
    contentItems,
  };
};
