import { Card, Button } from "flowbite-react";

const posts = [
  {
    id: 1,
    title: "The Future of Generative AI in Daily Life",
    href: "#",
    description:
      "How tools like ChatGPT and Stable Diffusion are shaping the way we work, create, and communicate.",
    date: "Aug 12, 2024",
    time: "10:30 AM",
    datetime: "2024-08-12T10:30:00Z",
    category: { title: "AI Research", href: "#" },
    author: {
      name: "Dr. Sarah Kim",
      role: "AI Researcher",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Ethics of AI: Balancing Innovation and Responsibility",
    href: "#",
    description:
      "With AI growing rapidly, what are the ethical challenges in privacy, bias, and human-AI collaboration?",
    date: "Aug 5, 2024",
    time: "08:15 AM",
    datetime: "2024-08-05T08:15:00Z",
    category: { title: "AI Ethics", href: "#" },
    author: {
      name: "James Miller",
      role: "Tech Journalist",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Robotics Meets Machine Learning",
    href: "#",
    description:
      "Exploring how advanced robotics and deep learning are merging to revolutionize industries worldwide.",
    date: "Jul 28, 2024",
    time: "04:50 PM",
    datetime: "2024-07-28T16:50:00Z",
    category: { title: "Technology", href: "#" },
    author: {
      name: "Alicia Wong",
      role: "CTO @ RoboTech",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=256&h=256&q=80",
    },
  },
];

export default function News() {
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
          {posts.map((post) => (
            <Card
              key={post.id}
              className="max-w-sm"
              imgAlt={post.title}
              imgSrc={post.author.imageUrl}
            >
              {/* Timestamp */}
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                <time dateTime={post.datetime}>
                  {post.date} · {post.time}
                </time>
              </p>

              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {post.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {post.description}
              </p>
              <Button color="purple">Read More</Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
