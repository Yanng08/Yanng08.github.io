# 个人网站

基于 **Next.js（App Router）+ Tailwind CSS** 的个人网站，构建时**静态导出**为纯 HTML/CSS/JS，通过 GitHub Actions 自动部署到 **GitHub Pages**，零服务器成本。

包含四个板块：首页、项目经历、文章与想法（Markdown 写作）、个人简历。

## 本地开发

```bash
npm install        # 首次运行
npm run dev        # 开发模式，访问 http://localhost:3000
npm run build      # 静态导出，产物在 out/ 目录
npm run lint       # 代码检查
```

## 日常维护

| 要改什么 | 改哪里 |
| --- | --- |
| 名字、简介、邮箱、GitHub 链接 | `data/site.ts` |
| 项目列表 | `data/projects.ts` |
| 简历内容 | `app/resume/page.tsx` |
| 发新文章 | 在 `content/posts/` 下新建 `.md` 文件 |

文章使用 Markdown，文件开头需要 frontmatter：

```markdown
---
title: 文章标题
date: 2026-07-18
tags: [标签1, 标签2]
summary: 一句话摘要，会显示在列表页。
---

正文用 Markdown 写。
```

> 建议文件名用英文/拼音（如 `my-first-post.md`），它会出现在文章 URL 里。

## 部署到 GitHub Pages

仓库里已包含工作流 `.github/workflows/deploy.yml`，push 后自动构建并部署。它会自动判断仓库类型：

- **用户主页仓库**（仓库名为 `你的用户名.github.io`）：部署到根路径，访问 `https://你的用户名.github.io`
- **项目页仓库**（其他仓库名，如 `personal-website`）：自动加上 `/仓库名` 前缀，访问 `https://你的用户名.github.io/仓库名`

步骤：

1. 在 GitHub 新建一个仓库（两种类型任选），把本地代码推上去：
   ```bash
   git remote add origin git@github.com:你的用户名/仓库名.git
   git push -u origin master
   ```
2. 打开仓库 **Settings → Pages**，把 **Source** 选为 **GitHub Actions**。
3. 再次 push 或在 Actions 页面手动触发 `Deploy to GitHub Pages`，完成后即可访问。

## 目录结构

```
app/            页面（App Router）
  blog/         文章列表 + 文章详情（动态路由，构建时静态生成）
  projects/     项目经历
  resume/       个人简历
components/     导航栏、页脚
content/posts/  Markdown 文章
data/           站点信息与项目数据
lib/posts.ts    文章读取与渲染
```
