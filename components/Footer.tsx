import { site } from "@/data/site";
import { GitHubIcon, MailIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-zinc-900/5 dark:border-white/5">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-3 px-4 py-10 text-sm text-zinc-500 sm:px-6 dark:text-zinc-400">
        <div className="flex gap-3">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 transition-colors hover:text-accent"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={`mailto:${site.email}`}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 transition-colors hover:text-accent"
          >
            <MailIcon className="h-4 w-4" />
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
