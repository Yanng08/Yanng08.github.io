import type { Metadata } from "next";
import { projects } from "@/data/projects";
import {
  ArrowUpRightIcon,
  CodeIcon,
  FolderIcon,
} from "@/components/icons";

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
            className="group glass flex flex-col gap-3 rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="icon-chip h-9 w-9 shrink-0">
                  <FolderIcon className="h-4.5 w-4.5" />
                </span>
                <h2 className="text-lg font-semibold">{project.name}</h2>
              </div>
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
                  className="rounded-full border border-zinc-900/10 px-2.5 py-0.5 text-xs text-zinc-500 dark:border-white/10 dark:text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
            {(project.link || project.repo) && (
              <div className="flex gap-4 border-t border-zinc-900/5 pt-3 text-sm dark:border-white/5">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-accent underline-offset-4 transition-opacity hover:underline hover:opacity-80"
                  >
                    <ArrowUpRightIcon className="h-4 w-4" />
                    在线预览
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-accent underline-offset-4 transition-opacity hover:underline hover:opacity-80"
                  >
                    <CodeIcon className="h-4 w-4" />
                    源代码
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
