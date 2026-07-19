import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { CalendarIcon } from "@/components/icons";

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
      <ul className="grid gap-5 sm:grid-cols-2">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group glass flex h-full flex-col gap-2.5 rounded-2xl p-5 transition-all hover:-translate-y-1 hover:shadow-lg sm:p-6"
            >
              <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <time className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-400 dark:text-zinc-500">
                  <CalendarIcon className="h-3.5 w-3.5" />
                  {post.date}
                </time>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent/10 px-2 py-0.5 text-xs text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </span>
              <span className="text-lg font-medium leading-7 transition-colors group-hover:text-accent">
                {post.title}
              </span>
              {post.summary && (
                <span className="line-clamp-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
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
