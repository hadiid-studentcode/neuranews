import { fetchWorldNews } from "@/lib/fetchers/worldnewsapi";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const articles = await fetchWorldNews();
    return NextResponse.json(articles);
  } catch (error) {
    console.error("Error fetching news:", error);
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}
