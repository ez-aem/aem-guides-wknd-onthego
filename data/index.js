import { HOME_SCREEN_DATA, ADVENTURES_DATA, ARTICLE_DATA } from "../CONSTANTS";

export default async function fetchData(endpoint = false, articlePath = false) {
  if (!endpoint) return false;
  let url = false;

  switch (endpoint) {
    case "home":
      url = HOME_SCREEN_DATA;
      break;
    case "adventures":
    case "adventuresList":
      url = ADVENTURES_DATA;
      break;
    case "article":
      if (articlePath) url = `${ARTICLE_DATA}${articlePath}`;
      break;
  }

  const response = await fetch(url);
  return await response.json();
}