import type { Metadata } from "next";
import { site } from "@/data/site";
import {
  BriefcaseIcon,
  GitHubIcon,
  GraduationCapIcon,
  LayersIcon,
  MailIcon,
} from "@/components/icons";

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

function SectionTitle({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <h2 className="flex items-center gap-2.5 text-xl font-semibold">
      <span className="icon-chip h-8 w-8">{icon}</span>
      {children}
    </h2>
  );
}

export default function ResumePage() {
  return (
    <div className="flex flex-col gap-8 sm:gap-10">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">个人简历</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          在 <code className="text-sm">app/resume/page.tsx</code>{" "}
          中修改内容；需要 PDF 版可在浏览器里打印本页。
        </p>
      </header>

      <div className="grid gap-8 sm:gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-8 sm:gap-10">
          <section className="flex flex-col gap-4">
            <SectionTitle icon={<GraduationCapIcon className="h-4 w-4" />}>
              教育经历
            </SectionTitle>
            <ul className="flex flex-col gap-4">
              {education.map((item) => (
                <li
                  key={item.school}
                  className="glass flex flex-col gap-1 rounded-2xl p-5"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-medium">
                      {item.school} · {item.degree}
                    </h3>
                    <span className="font-mono text-xs text-zinc-500">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section className="flex flex-col gap-4">
            <SectionTitle icon={<BriefcaseIcon className="h-4 w-4" />}>
              工作 / 实习经历
            </SectionTitle>
            <ul className="flex flex-col gap-4">
              {experience.map((item) => (
                <li
                  key={item.title}
                  className="glass flex flex-col gap-1 rounded-2xl p-5"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-medium">{item.title}</h3>
                    <span className="font-mono text-xs text-zinc-500">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="flex flex-col gap-8 sm:gap-10">
          <section className="flex flex-col gap-4">
            <SectionTitle icon={<LayersIcon className="h-4 w-4" />}>
              技能
            </SectionTitle>
            <ul className="glass flex flex-col gap-3 rounded-2xl p-5">
              {skills.map((group) => (
                <li
                  key={group.category}
                  className="flex flex-wrap gap-2 text-sm"
                >
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
            <SectionTitle icon={<MailIcon className="h-4 w-4" />}>
              联系方式
            </SectionTitle>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${site.email}`}
                className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors hover:text-accent"
              >
                <MailIcon className="h-4 w-4 text-accent" />
                {site.email}
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors hover:text-accent"
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
