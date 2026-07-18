import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 静态导出：构建产物为纯静态文件，输出到 out/ 目录
  output: "export",
  // 每个路由输出为 目录/index.html（如 /blog/hello-world/ -> blog/hello-world/index.html），
  // 在 GitHub Pages 等任意静态服务器上都能正确访问
  trailingSlash: true,
  // GitHub Pages 没有服务端，不能使用 Next 的图片优化服务
  images: { unoptimized: true },
  // GitHub Pages 项目页（username.github.io/repo-name）需要 basePath；
  // 用户主页仓库（username.github.io）则留空。部署工作流会自动注入 BASE_PATH。
  basePath: process.env.BASE_PATH || "",
};

export default nextConfig;
