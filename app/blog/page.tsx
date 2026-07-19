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
      <ul className="flex flex-col">
        {posts.map((post) => (
          <li
            key={post.slug}
            className="border-b border-zinc-100 last:border-0 dark:border-zinc-800/60"
          >
            <Link
              href={`/blog/${post.slug}`}
              className="group -mx-3 flex flex-col gap-1.5 rounded-xl px-3 py-4 transition-colors hover:bg-accent/5"
            >
              <span className="text-lg font-medium transition-colors group-hover:text-accent">
                {post.title}
              </span>
              <span className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-500 dark:text-zinc-400">
                <time className="font-mono text-xs">{post.date}</time>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent/10 px-2 py-0.5 text-xs text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </span>
              {post.summary && (
                <span className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {post.summary}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
