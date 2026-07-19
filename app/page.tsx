import Link from "next/link";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import { getAllPosts } from "@/lib/posts";
import { OmenFigure } from "@/components/OmenFigure";
import {
  ArrowRightIcon,
  BookOpenIcon,
  FileTextIcon,
  FolderIcon,
  PenIcon,
  SparklesIcon,
} from "@/components/icons";

const sections = [
  {
    href: "/projects",
    title: "项目经历",
    description: "做过的一些项目和作品，附演示与源码。",
    icon: FolderIcon,
  },
  {
    href: "/blog",
    title: "文章与想法",
    description: "学习笔记、想法分享与随笔。",
    icon: PenIcon,
  },
  {
    href: "/resume",
    title: "个人简历",
    description: "教育背景、经历与技能。",
    icon: FileTextIcon,
  },
];

export default function Home() {
  const posts = getAllPosts();
  const latestPosts = posts.slice(0, 3);

  return (
    <div className="flex flex-col gap-14 sm:gap-20">
      <section className="grid items-center gap-10 pt-2 sm:pt-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="flex flex-col items-start gap-4 sm:gap-5">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-medium text-accent">
            <SparklesIcon className="h-3.5 w-3.5" />
            欢迎来到我的个人网站
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
            <span className="animate-gradient bg-gradient-to-r from-accent via-fuchsia-500 to-accent bg-clip-text text-transparent">
              {site.name}
            </span>
          </h1>
          <p className="text-lg text-zinc-600 sm:text-xl dark:text-zinc-400">
            {site.tagline}
          </p>
          <p className="max-w-xl leading-7 text-zinc-600 dark:text-zinc-400">
            {site.description}
          </p>
          <div className="mt-1 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-accent/25 transition hover:opacity-90"
            >
              查看项目
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link
              href="/blog"
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition hover:text-accent"
            >
              读点文章
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <OmenFigure className="animate-float h-60 w-auto sm:h-80" />
        </div>
      </section>

      <section className="glass flex flex-wrap items-center justify-between gap-x-6 gap-y-4 rounded-2xl px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="icon-chip h-9 w-9 shrink-0">
            <BookOpenIcon className="h-4 w-4" />
          </span>
          <p className="text-lg font-bold leading-6">
            {posts.length}
            <span className="ml-1 text-xs font-normal text-zinc-500 dark:text-zinc-400">
              篇文章
            </span>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="icon-chip h-9 w-9 shrink-0">
            <FolderIcon className="h-4 w-4" />
          </span>
          <p className="text-lg font-bold leading-6">
            {projects.length}
            <span className="ml-1 text-xs font-normal text-zinc-500 dark:text-zinc-400">
              个项目
            </span>
          </p>
        </div>
        <p className="text-xs leading-5 text-zinc-400 dark:text-zinc-500">
          2026 年建站 · Next.js 静态生成 · GitHub Pages 托管
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="group glass flex flex-col gap-3 rounded-2xl p-5 transition-all hover:-translate-y-1 hover:shadow-lg sm:p-6"
          >
            <span className="icon-chip h-10 w-10">
              <section.icon className="h-5 w-5" />
            </span>
            <h2 className="flex items-center gap-1 font-semibold">
              {section.title}
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:text-accent" />
            </h2>
            <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {section.description}
            </p>
          </Link>
        ))}
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex items-baseline justify-between px-1">
          <h2 className="flex items-center gap-2.5 text-xl font-semibold">
            <span className="h-4 w-1 rounded-full bg-accent"></span>
            最新文章
          </h2>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-zinc-500 transition-colors hover:text-accent"
          >
            全部文章
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </Link>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group glass flex h-full flex-col gap-2 rounded-2xl p-5 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <time className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                  {post.date}
                </time>
                <span className="font-medium transition-colors group-hover:text-accent">
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
      </section>
    </div>
  );
}
