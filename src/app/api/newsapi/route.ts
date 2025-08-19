import { fetchNewsAPI } from "@/lib/fetchers/newsapi";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const articles = await fetchNewsAPI();
    return NextResponse.json(articles);
  } catch (error) {
    console.error("Error fetching news:", error);
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}
