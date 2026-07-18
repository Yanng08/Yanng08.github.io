import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "简历" };

const education = [
  {
    school: "某某大学",
    degree: "本科 · 某某专业",
    period: "2023 — 2027（预计）",
    detail: "主修课程、GPA、荣誉等写在这里。",
  },
];

const experience = [
  {
    title: "某实验室 / 某公司 · 某岗位",
    period: "2025.06 — 2025.09",
    detail: "做了什么、负责什么、有什么成果，尽量量化。",
  },
];

const skills = [
  { category: "编程语言", items: ["Python", "TypeScript", "C++"] },
  { category: "框架与工具", items: ["React", "Next.js", "Git"] },
  { category: "其他", items: ["英语", "写作"] },
];

export default function ResumePage() {
  return (
    <div className="flex flex-col gap-10">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">个人简历</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          在 <code className="text-sm">app/resume/page.tsx</code>{" "}
          中修改内容；需要 PDF 版可在浏览器里打印本页。
        </p>
      </header>

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">教育经历</h2>
        <ul className="flex flex-col gap-4">
          {education.map((item) => (
            <li key={item.school} className="flex flex-col gap-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-medium">
                  {item.school} · {item.degree}
                </h3>
                <span className="text-sm text-zinc-500">{item.period}</span>
              </div>
              <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {item.detail}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">工作 / 实习经历</h2>
        <ul className="flex flex-col gap-4">
          {experience.map((item) => (
            <li key={item.title} className="flex flex-col gap-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-medium">{item.title}</h3>
                <span className="text-sm text-zinc-500">{item.period}</span>
              </div>
              <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {item.detail}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">技能</h2>
        <ul className="flex flex-col gap-3">
          {skills.map((group) => (
            <li key={group.category} className="flex flex-wrap gap-2 text-sm">
              <span className="w-24 shrink-0 text-zinc-500">
                {group.category}
              </span>
              <span className="text-zinc-700 dark:text-zinc-300">
                {group.items.join(" / ")}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">联系方式</h2>
        <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          邮箱：
          <a
            href={`mailto:${site.email}`}
            className="underline underline-offset-4"
          >
            {site.email}
          </a>
          {" · "}
          GitHub：
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            {site.github}
          </a>
        </p>
      </section>
    </div>
  );
}
