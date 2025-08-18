import { NextResponse } from "next/server";
import { fetchAllNews } from "@/lib/fetchers";

export async function GET() {
  try {
    const articles = await fetchAllNews();
    return NextResponse.json(articles);
  } catch (error) {
    console.error("Error fetching news:", error);
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}
