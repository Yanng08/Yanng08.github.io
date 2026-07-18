---
title: 本站的技术选型
date: 2026-07-18
tags: [技术]
summary: Next.js 静态导出 + Markdown + GitHub Pages，零成本跑一个个人网站。
---

这个网站的技术栈很简单，但足够好用。

## 技术栈

- **Next.js（App Router）**：用 React 写页面，生态成熟，以后想加功能也有空间。
- **静态导出（Static Export）**：构建时生成纯静态 HTML，不需要服务器。
- **Markdown 写文章**：文章就是 `content/posts/` 下的 `.md` 文件，构建时用 `gray-matter` 解析 frontmatter、`marked` 渲染成 HTML。
- **Tailwind CSS**：原子化 CSS，配合 `@tailwindcss/typography` 的 `prose` 类排版文章。
- **GitHub Pages**：免费托管，push 到 main 分支后由 GitHub Actions 自动构建部署。

## 为什么不用现成的博客框架

Hexo、Hugo 当然更省事，但用 Next.js 自己搭有几个好处：

1. 页面结构完全自己掌控，项目、简历、文章可以自由组合；
2. 顺便保持写 React/TypeScript 的手感；
3. 静态导出后性能和托管成本与纯静态生成器完全一样。

唯一的代价是功能都要自己动手——但这本来就是乐趣所在。
