import axios from "axios";
import { worldnewsapiResponse } from "@/types/news";
import { Article } from "@/types/article";
import { randomBytes } from "crypto";

export async function fetchWorldNews(): Promise<Article[]> {
  try {
    const res = await axios.get<worldnewsapiResponse>(
      "https://api.worldnewsapi.com/search-news",
      {
        params: {
          "api-key": process.env.WORLD_NEWS_KEY,
          text: "artificial intelligence",
        },
      }
    );

    // kalau response kosong / news tidak ada
    if (!res.data || !res.data.news || res.data.news.length === 0) {
      return []; // return kosong
    }

    return res.data.news.map(
      (a): Article => ({
        id: randomBytes(16).toString("hex"),
        title: a.title ?? "No title",
        description: a.summary ?? "No description available",
        link: a.url,
        image_url: a.image ?? null,
        timestamp: a.publish_date,
        sumberAPI: "WorldNews API",
      })
    );
  } catch (error) {
    console.error("Error fetching from WorldNews API:", error);
    return []; // return kosong kalau error
  }
}
