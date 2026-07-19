import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/70 dark:border-zinc-800/70">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-3 px-4 py-10 text-sm text-zinc-500 sm:px-6 dark:text-zinc-400">
        <div className="flex gap-3">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-200 px-3.5 py-1.5 transition-colors hover:border-accent hover:text-accent dark:border-zinc-700"
          >
            GitHub
          </a>
          <a
            href={`mailto:${site.email}`}
            className="rounded-full border border-zinc-200 px-3.5 py-1.5 transition-colors hover:border-accent hover:text-accent dark:border-zinc-700"
          >
            邮箱
          </a>
        </div>
        <p className="text-center">
          © {new Date().getFullYear()} {site.name} · 由 Next.js 构建，托管于
          GitHub Pages
        </p>
      </div>
    </footer>
  );
}
