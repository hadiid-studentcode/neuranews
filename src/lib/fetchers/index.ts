import { fetchNewsData } from "./newsdata";

export async function fetchAllNews() {
  const [newsdata] = await Promise.all([fetchNewsData()]);
  return [...newsdata].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );
}
