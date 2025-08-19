// types/news.ts

export interface NewsDataResponse {
  status: string;
  totalResults: number;
  results: {
    article_id: string;
    title: string;
    link: string;
    description: string;
    image_url: string | null;
    pubDate: string;
  }[];
  nextPage?: string;
}

export interface NewsAPIResponse {
  status: string;
  totalResults: number;
  articles: {
    source: {
      id: number | null;
      name: string;
    };
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string;
  }[];
}
