import feedsJSON from "../testFeeds";
import { proxyToken, proxyUrl } from "../constants";
import { FeedsList } from "../types";
import { getDataFromXML } from ".";

const myFetch = async (url: string): Promise<string> => {
  return await (
    await fetch(proxyUrl + url, {
      headers: new Headers([["x-auth-token", proxyToken]]),
    })
  ).text();
};

export function getFeeds(): Promise<FeedsList> {
  return Promise.resolve(feedsJSON.feeds);
}

export async function getFeedXML(url: string): Promise<string> {
  return await myFetch(url);
}

export async function getParsedFeedContent(url: string, id: number) {
  return getDataFromXML(await getFeedXML(url), id);
}
