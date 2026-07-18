<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project notes

Personal website (Chinese UI): Next.js App Router + Tailwind CSS v4, statically exported (`output: 'export'`) to `out/` and deployed to GitHub Pages via `.github/workflows/deploy.yml`.

- `next.config.ts` reads `BASE_PATH` env for GitHub Pages project pages (`/repo-name`); the workflow injects it automatically. Do not hardcode a basePath.
- No `next/font/google` — uses a system font stack in `app/globals.css` so local builds work without fetching Google Fonts.
- Blog posts are Markdown in `content/posts/` with frontmatter (title/date/tags/summary), read by `lib/posts.ts` (gray-matter + marked). `app/blog/[slug]/page.tsx` uses `generateStaticParams` + `dynamicParams = false`.
- Editable content lives in `data/site.ts` (identity/links), `data/projects.ts` (projects), `app/resume/page.tsx` (resume).
- Verify changes with `npm run build` (must produce `out/`) and `npm run lint`.
