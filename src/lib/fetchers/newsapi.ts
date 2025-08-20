import axios from "axios";
import { NewsAPIResponse } from "@/types/news";
import { Article } from "@/types/article";
import { randomBytes } from "crypto";

export async function fetchNewsAPI(): Promise<Article[]> {
  try {
    const res = await axios.get<NewsAPIResponse>(
      "https://newsapi.org/v2/everything",
      {
        params: {
          q: "artificial intelligence",
          apiKey: process.env.NEWS_API_KEY,
        },
      }
    );

    // kalau response kosong / tidak ada articles
    if (!res.data || !res.data.articles || res.data.articles.length === 0) {
      return []; // return kosong
    }

    return res.data.articles.map(
      (a): Article => ({
        id: randomBytes(16).toString("hex"),
        title: a.title ?? "No title",
        description: a.description ?? "No description available",
        link: a.url,
        image_url: a.urlToImage ?? null,
        timestamp: a.publishedAt,
        sumberAPI: "News API",
      })
    );
  } catch (error) {
    console.error("Error fetching from NewsAPI:", error);
    return []; // return kosong kalau error
  }
}
