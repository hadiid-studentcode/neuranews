import { fetchNewsAPI } from "./newsapi";

export async function fetchAllNews() {
  const [newsapi] = await Promise.all([fetchNewsAPI()]);
  return [...newsapi].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );
}
