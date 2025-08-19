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

export interface worldnewsapiResponse {
  offset: number;
  number: number;
  available: number;
  news: {
    id: number;
    title: string;
    text: string;
    summary: string;
    url: string;
    image: string;
    video: string | null;
    publish_date: string;
    author: string;
    authors: Array<string>;
    language: string;
    source_country: string;
    sentiment: string;
  }[];
}
