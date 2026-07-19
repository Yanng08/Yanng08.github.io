import Link from "next/link";
import { site } from "@/data/site";
import { getAllPosts } from "@/lib/posts";

const sections = [
  {
    href: "/projects",
    title: "项目经历",
    description: "做过的一些项目和作品，附演示与源码。",
  },
  {
    href: "/blog",
    title: "文章与想法",
    description: "学习笔记、想法分享与随笔。",
  },
  {
    href: "/resume",
    title: "个人简历",
    description: "教育背景、经历与技能。",
  },
];

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <div className="flex flex-col gap-16">
      <section className="flex flex-col items-start gap-5 pb-2 pt-8">
        <span className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-medium text-accent">
          欢迎来到我的个人网站
        </span>
        <h1 className="text-5xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-accent to-fuchsia-500 bg-clip-text text-transparent">
            {site.name}
          </span>
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400">
          {site.tagline}
        </p>
        <p className="max-w-xl leading-7 text-zinc-600 dark:text-zinc-400">
          {site.description}
        </p>
        <div className="mt-2 flex gap-3">
          <Link
            href="/projects"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
          >
            查看项目
          </Link>
          <Link
            href="/blog"
            className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium transition hover:border-accent hover:text-accent dark:border-zinc-700"
          >
            读点文章
          </Link>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="group rounded-2xl border border-zinc-200 bg-white/60 p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/40"
          >
            <h2 className="font-semibold">
              {section.title}
              <span className="ml-1 inline-block transition-transform group-hover:translate-x-1 group-hover:text-accent">
                →
              </span>
            </h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {section.description}
            </p>
          </Link>
        ))}
      </section>

      <section className="flex flex-col gap-3">
        <div className="flex items-baseline justify-between px-1">
          <h2 className="flex items-center gap-2.5 text-xl font-semibold">
            <span className="h-4 w-1 rounded-full bg-accent"></span>
            最新文章
          </h2>
          <Link
            href="/blog"
            className="text-sm text-zinc-500 transition-colors hover:text-accent"
          >
            全部文章 →
          </Link>
        </div>
        <ul className="flex flex-col">
          {latestPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group -mx-3 flex flex-col gap-1 rounded-xl px-3 py-3 transition-colors hover:bg-accent/5"
              >
                <span className="font-medium transition-colors group-hover:text-accent">
                  {post.title}
                </span>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  <time className="font-mono text-xs">{post.date}</time>
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
