import axios from "axios";
import { NewsDataResponse } from "@/types/news";
import { Article } from "@/types/article";
import { randomBytes } from "crypto";

export async function fetchNewsData(): Promise<Article[]> {
  try {
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

    // kalau response kosong / results tidak ada
    if (!res.data || !res.data.results || res.data.results.length === 0) {
      return []; // return kosong
    }

    return res.data.results.map(
      (a): Article => ({
        id: randomBytes(16).toString("hex"),
        title: a.title ?? "No title",
        description: a.description ?? "No description available",
        link: a.link,
        image_url: a.image_url ?? null,
        timestamp: a.pubDate,
        sumberAPI: "NewsData API",
      })
    );
  } catch (error) {
    console.error("Error fetching from NewsData API:", error);
    return []; // return kosong kalau error
  }
}
