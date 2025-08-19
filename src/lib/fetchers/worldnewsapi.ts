import axios from "axios";
import { worldnewsapiResponse } from "@/types/news";
import { Article } from "@/types/article";
import { randomBytes } from "crypto";

export async function fetchWorldNews(): Promise<Article[]> {
  const res = await axios.get<worldnewsapiResponse>(
    "https://api.worldnewsapi.com/search-news",
    {
      params: {
      
        "api-key": process.env.WORLD_NEWS_KEY,
        text: "artificial intelligence",
      },
    }
  );

  return res.data.news.map(
    (a): Article => ({
      id: randomBytes(16).toString("hex"),
      title: a.title,
      description: a.summary,
      link: a.url,
      image_url: a.image,
      timestamp: a.publish_date,
    })
  );
}
