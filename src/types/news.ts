// types/news.ts


export interface NewsAPIResponse {
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
