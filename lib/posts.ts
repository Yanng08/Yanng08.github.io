import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const postsDir = path.join(process.cwd(), "content", "posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
};

export type Post = PostMeta & { html: string };

// frontmatter 里不带引号的日期（date: 2026-07-18）会被 YAML 解析成 Date 对象，统一转成 YYYY-MM-DD 字符串
function normalizeDate(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return value ? String(value) : "";
}

/** 读取 content/posts 下所有 Markdown 文章，按日期倒序返回元信息 */
export function getAllPosts(): PostMeta[] {
  return fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(postsDir, file), "utf8");
      const { data } = matter(raw);
      return {
        slug,
        title: (data.title as string) ?? slug,
        date: normalizeDate(data.date),
        tags: (data.tags as string[]) ?? [],
        summary: (data.summary as string) ?? "",
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** 按 slug 读取单篇文章并渲染正文为 HTML */
export async function getPostBySlug(slug: string): Promise<Post> {
  const raw = fs.readFileSync(path.join(postsDir, `${slug}.md`), "utf8");
  const { data, content } = matter(raw);
  const html = await marked.parse(content);
  return {
    slug,
    title: (data.title as string) ?? slug,
    date: normalizeDate(data.date),
    tags: (data.tags as string[]) ?? [],
    summary: (data.summary as string) ?? "",
    html,
  };
}
