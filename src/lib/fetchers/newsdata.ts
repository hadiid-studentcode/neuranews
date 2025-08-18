import axios from "axios";
import { NewsDataResponse } from "@/types/news";
import { Article } from "@/types/article";
import { randomBytes } from "crypto";

export async function fetchNewsData(): Promise<Article[]> {
  const res = await axios.get<NewsDataResponse>(
    "https://newsdata.io/api/1/latest",
    {
      params: {
        q: "artificial intelligence",
        category: "technology",
        apiKey: process.env.NEWS_DATA_KEY,
      },
    }
  );

  return res.data.results.map(
    (a): Article => ({
      id: randomBytes(16).toString("hex"),
      title: a.title,
      description: a.description,
      link: a.link,
      image_url: a.image_url,
      timestamp: a.pubDate,
    })
  );
}
