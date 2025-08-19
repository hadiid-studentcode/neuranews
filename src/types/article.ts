export interface Article {
  id: string;
  title: string;
  description: string | null;
  image_url: string | null;
  timestamp: string;
  link: string;
  sumberAPI: string;
}
