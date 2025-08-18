import { NextResponse } from "next/server";
import { fetchAllNews } from "@/lib/fetchers";

export async function GET() {
  const articles = await fetchAllNews();
  return NextResponse.json(articles);
}
