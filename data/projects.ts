// 项目列表：按这个格式继续往里加就行
export type Project = {
  name: string;
  year: string;
  description: string;
  tags: string[];
  link?: string; // 在线预览地址（可选）
  repo?: string; // 代码仓库地址（可选）
};

export const projects: Project[] = [
  {
    name: "示例项目一",
    year: "2026",
    description:
      "简单描述这个项目解决了什么问题、你负责的部分、取得的成果，有量化结果更好。",
    tags: ["Next.js", "TypeScript"],
    repo: "https://github.com/yourname/project-one",
  },
  {
    name: "示例项目二",
    year: "2025",
    description: "一两句话即可，突出你在其中的贡献和最终结果。",
    tags: ["Python", "数据分析"],
    link: "https://example.com",
  },
  {
    name: "示例项目三",
    year: "2024",
    description: "更多项目可以在 data/projects.ts 中继续添加。",
    tags: ["课程项目"],
  },
];
