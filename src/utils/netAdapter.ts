import feedsJSON from "../testFeeds";
import { proxyToken, proxyUrl } from "../constants";
import { FeedsList } from "../types";
import { getDataFromXML } from ".";

const myProxyFetch = (url: string): Promise<Response> => {
  try {
    return fetch(proxyUrl + url, {
      headers: new Headers([["x-auth-token", proxyToken as string]]),
    });
  } catch (error) {
    throw error;
  }
};

export const myFetch = async (url: string): Promise<string> => {
  try {
    return (await fetch(url)).text();
  } catch (error) {
    throw error;
  }
};

export async function getSiteData(url: string) {
  const resp = await myProxyFetch(url);
  return resp.text()
}

export function getFeeds(): Promise<FeedsList> {
  return Promise.resolve(feedsJSON.feeds);
}

export async function getFeedXML(url: string): Promise<string> {
  return (await myProxyFetch(url)).text();
}

export async function getParsedFeedContent(url: string, id: number) {
  return getDataFromXML(await getFeedXML(url), id);
}
