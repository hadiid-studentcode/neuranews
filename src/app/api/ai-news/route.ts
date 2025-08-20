import { NextResponse } from "next/server";
import { fetchAllNews } from "@/lib/fetchers";
import { Article } from "@/types/article";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search")?.toLowerCase() || "";


    const articles = await fetchAllNews();

    // filter berdasarkan title (case-insensitive)
    const filtered = search
      ? articles.filter((a: Article) => a.title.toLowerCase().includes(search))
      : articles;

    // contoh masih dibatasi 6 data
    return NextResponse.json(filtered);
  } catch (error) {
    console.error("Error fetching news:", error);
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}
