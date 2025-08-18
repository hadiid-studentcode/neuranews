"use client";

import FooterComponents from "@/components/footer";
import HeroSection from "@/components/hero";
import { NavbarComponents } from "@/components/navbar";
import News from "@/components/news";
import { useEffect, useState } from "react";
import axios from "axios";
import { Article } from "@/types/article";

export default function Home() {
  const [news, setNews] = useState<Article[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get<Article[]>("/api/ai-news");
        setNews(response.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
      }
    };
    fetchNews();
  }, []);

  return (
    <>
      <NavbarComponents />
      <HeroSection />

      <News news={news} />

      <FooterComponents />
    </>
  );
}
