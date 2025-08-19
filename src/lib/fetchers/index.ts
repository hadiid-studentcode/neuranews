import { fetchNewsData } from "./newsdata";
import {fetchNewsAPI} from "./newsapi";

export async function fetchAllNews() {
  const [newsdata,newsapi] = await Promise.all([
    fetchNewsData(),
    fetchNewsAPI()
  ]);
  return [...newsdata,...newsapi].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );
}
