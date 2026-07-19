import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

// 静态导出：只生成 generateStaticParams 返回的路径
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return { title: post.title, description: post.summary };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return (
    <article className="flex flex-col gap-8">
      <header className="flex flex-col gap-4 border-b border-zinc-100 pb-8 dark:border-zinc-800/60">
        <Link
          href="/blog"
          className="w-fit text-sm text-zinc-500 transition-colors hover:text-accent"
        >
          ← 返回文章列表
        </Link>
        <h1 className="text-4xl font-bold leading-tight tracking-tight">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-500 dark:text-zinc-400">
          <time className="font-mono text-xs">{post.date}</time>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-accent/10 px-2 py-0.5 text-xs text-accent"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>
      <div
        className="prose prose-stone max-w-none dark:prose-invert prose-a:text-accent prose-headings:tracking-tight"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </article>
  );
}
