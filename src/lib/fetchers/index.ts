import { fetchNewsData } from "./newsdata";
import {fetchNewsAPI} from "./newsapi";
import { fetchWorldNews } from "./worldnewsapi";

export async function fetchAllNews() {
  const [newsdata,newsapi,worldnews] = await Promise.all([
    fetchNewsData(),
    fetchNewsAPI(),
    fetchWorldNews()
  ]);
  return [...newsdata,...newsapi,...worldnews].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );
}
