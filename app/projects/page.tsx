import type { Metadata } from "next";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "项目" };

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">项目经历</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          项目列表在 <code className="text-sm">data/projects.ts</code> 中维护。
        </p>
      </header>
      <ul className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <li
            key={project.name}
            className="flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-white/60 p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/40"
          >
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-lg font-semibold">{project.name}</h2>
              <span className="shrink-0 rounded-md bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                {project.year}
              </span>
            </div>
            <p className="flex-1 leading-7 text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-200 px-2.5 py-0.5 text-xs text-zinc-500 dark:border-zinc-700 dark:text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
            {(project.link || project.repo) && (
              <div className="flex gap-4 text-sm">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-accent underline-offset-4 transition-opacity hover:underline hover:opacity-80"
                  >
                    在线预览 ↗
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-accent underline-offset-4 transition-opacity hover:underline hover:opacity-80"
                  >
                    源代码 ↗
                  </a>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
