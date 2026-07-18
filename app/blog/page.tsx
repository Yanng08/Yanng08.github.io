import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = { title: "文章" };

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">文章与想法</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          在 <code className="text-sm">content/posts/</code> 目录下新建
          Markdown 文件即可发布。
        </p>
      </header>
      <ul className="flex flex-col gap-6">
        {posts.map((post) => (
          <li key={post.slug} className="flex flex-col gap-1">
            <Link
              href={`/blog/${post.slug}`}
              className="w-fit text-lg font-medium underline-offset-4 hover:underline"
            >
              {post.title}
            </Link>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-500 dark:text-zinc-400">
              <time>{post.date}</time>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
            {post.summary && (
              <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {post.summary}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
