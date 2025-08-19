import { fetchNewsData } from "@/lib/fetchers/newsdata";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const articles = await fetchNewsData();
    return NextResponse.json(articles);
  } catch (error) {
    console.error("Error fetching news:", error);
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}
