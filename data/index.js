import AEMHeadless from "@adobe/aem-headless-client-js";
import { URL, GRAPHQL_ENDPOINT, HOME_SCREEN_DATA, ADVENTURES_DATA, ARTICLE_DATA } from "../CONSTANTS";

const aemHeadlessClient = new AEMHeadless({
  serviceURL: URL,
  endpoint: GRAPHQL_ENDPOINT,
})

export default async function fetchData(endpoint = false, articlePath = false) {
  if (!endpoint) return false;

  let queryPath = false;

  switch (endpoint) {
    case "home":
      queryPath = HOME_SCREEN_DATA;
      break;
    case "adventures":
    case "adventuresList":
      queryPath = ADVENTURES_DATA;
      break;
    case "article":
      if (articlePath) queryPath = `${ARTICLE_DATA}${articlePath}`;
      break;
  }

  try {
    return await aemHeadlessClient.runPersistedQuery(queryPath)
  } catch (e) {
    console.error(e);
    return false;
  }
}