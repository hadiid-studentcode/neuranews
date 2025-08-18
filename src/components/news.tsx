/* eslint-disable @next/next/no-img-element */
import { Article } from "@/types/article";
import { Card, Button } from "flowbite-react";

export default function News({ news }: { news: Article[] }) {
  return (
    <div className="bg-white py-24 sm:py-32 dark:bg-gray-900" id="news">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
            Latest AI News
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600 dark:text-gray-300">
            Stay informed with insights, trends, and breakthroughs in Artificial
            Intelligence.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-2xl sm:grid-cols-2 grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 dark:border-gray-700">
          {news.map((item) => (
            <Card key={item.id} className="max-w-sm">
              <img
                src={
                  item.image_url ??
                  "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
                }
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />

              {/* Timestamp */}
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 mt-4">
                <time dateTime={item.timestamp}>
                  {new Date(item.timestamp).toLocaleString()}
                </time>
              </p>

              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {item.description && item.description.length > 100
                  ? item.description.substring(0, 100) + "..."
                  : item.description}
              </p>

              <Button color="purple" as="a" href={item.link} target="_blank">
                Read More
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
