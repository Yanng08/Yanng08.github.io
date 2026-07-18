import Link from "next/link";
import { site } from "@/data/site";
import { getAllPosts } from "@/lib/posts";

const sections = [
  { href: "/projects", title: "项目经历", description: "做过的一些项目和作品。" },
  { href: "/blog", title: "文章与想法", description: "学习笔记、想法分享与随笔。" },
  { href: "/resume", title: "个人简历", description: "教育背景、经历与技能。" },
];

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <div className="flex flex-col gap-14">
      <section className="flex flex-col gap-4 pt-6">
        <h1 className="text-4xl font-bold tracking-tight">{site.name}</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">{site.tagline}</p>
        <p className="max-w-xl leading-7 text-zinc-600 dark:text-zinc-400">
          {site.description}
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="group rounded-xl border border-zinc-200 p-5 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
          >
            <h2 className="font-semibold">
              {section.title}
              <span className="ml-1 inline-block transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {section.description}
            </p>
          </Link>
        ))}
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xl font-semibold">最新文章</h2>
          <Link
            href="/blog"
            className="text-sm text-zinc-500 transition-colors hover:text-foreground"
          >
            全部文章 →
          </Link>
        </div>
        <ul className="flex flex-col gap-4">
          {latestPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-1"
              >
                <span className="font-medium underline-offset-4 group-hover:underline">
                  {post.title}
                </span>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  {post.date}
                  {post.summary ? ` · ${post.summary}` : ""}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
