import axios from "axios";
import { NewsAPIResponse } from "@/types/news";
import { Article } from "@/types/article";
import { randomBytes } from "crypto";

export async function fetchNewsAPI(): Promise<Article[]> {
  const res = await axios.get<NewsAPIResponse>(
    "https://newsapi.org/v2/everything",
    {
      params: {
        q: "artificial intelligence",
        apiKey: process.env.NEWS_API_KEY,
      },
    }
  );

  return res.data.articles.map(
    (a): Article => ({
      id: randomBytes(16).toString("hex"),
      title: a.title,
      description: a.description,
      link: a.url,
      image_url: a.urlToImage,
      timestamp: a.publishedAt,
      sumberAPI: "News API",
    })
  );
}
