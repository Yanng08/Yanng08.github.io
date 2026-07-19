// 原创手绘 SVG：幽影(Omen)风格的 Q 版兜帽小影子，非任何官方/同人原画复制
export function OmenFigure({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 300"
      className={className}
      role="img"
      aria-label="幽影风格的兜帽小影子"
    >
      <defs>
        <radialGradient id="omen-glow" cx="50%" cy="55%" r="55%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.45" />
          <stop offset="60%" stopColor="#6366f1" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="omen-cloak" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1c2450" />
          <stop offset="100%" stopColor="#0c1129" />
        </linearGradient>
        <linearGradient id="omen-hood" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#232c5e" />
          <stop offset="100%" stopColor="#141a3c" />
        </linearGradient>
        <filter
          id="omen-blur-eyes"
          x="-80%"
          y="-80%"
          width="260%"
          height="260%"
        >
          <feGaussianBlur stdDeviation="4" />
        </filter>
        <filter
          id="omen-blur-smoke"
          x="-60%"
          y="-60%"
          width="220%"
          height="220%"
        >
          <feGaussianBlur stdDeviation="10" />
        </filter>
        <filter
          id="omen-blur-shadow"
          x="-60%"
          y="-60%"
          width="220%"
          height="220%"
        >
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* 背后辉光 */}
      <ellipse cx="120" cy="165" rx="105" ry="115" fill="url(#omen-glow)" />

      {/* 地面阴影 */}
      <ellipse
        cx="120"
        cy="287"
        rx="66"
        ry="9"
        fill="#05070f"
        opacity="0.45"
        filter="url(#omen-blur-shadow)"
      />

      {/* 底部烟雾 */}
      <g filter="url(#omen-blur-smoke)">
        <ellipse cx="76" cy="272" rx="30" ry="14" fill="#4f46e5" opacity="0.22" />
        <ellipse cx="164" cy="276" rx="34" ry="15" fill="#7c3aed" opacity="0.18" />
        <ellipse cx="120" cy="282" rx="44" ry="13" fill="#312e81" opacity="0.25" />
      </g>

      {/* 斗篷（破碎下摆） */}
      <path
        d="M62 282 C62 214 82 158 120 156 C158 158 178 214 178 282 L166 258 L154 284 L142 256 L130 284 L120 258 L110 284 L98 256 L86 284 L74 258 Z"
        fill="url(#omen-cloak)"
      />
      {/* 斗篷褶皱 */}
      <path
        d="M96 172 C92 205 90 235 92 262"
        stroke="#2c3772"
        strokeWidth="3"
        fill="none"
        opacity="0.5"
        strokeLinecap="round"
      />
      <path
        d="M144 172 C148 205 150 235 148 262"
        stroke="#2c3772"
        strokeWidth="3"
        fill="none"
        opacity="0.5"
        strokeLinecap="round"
      />
      {/* 胸前绑带 */}
      <path
        d="M98 192 L142 184"
        stroke="#5b6ee1"
        strokeWidth="4"
        opacity="0.3"
        strokeLinecap="round"
      />
      <path
        d="M96 210 L144 202"
        stroke="#5b6ee1"
        strokeWidth="4"
        opacity="0.22"
        strokeLinecap="round"
      />

      {/* 兜帽外形（尖顶） */}
      <path
        d="M120 14 C104 18 88 28 76 44 C64 60 59 79 60 100 C61 128 74 150 94 160 L146 160 C166 150 179 128 180 100 C181 79 176 60 164 44 C152 28 136 18 120 14 Z"
        fill="url(#omen-hood)"
      />
      {/* 帽檐内侧阴影（脸部空洞） */}
      <path
        d="M120 62 C98 62 86 82 88 106 C90 126 102 138 120 138 C138 138 150 126 152 106 C154 82 142 62 120 62 Z"
        fill="#070a18"
      />
      {/* 帽檐压出的阴影弧线 */}
      <path
        d="M87 102 C91 78 104 66 120 66 C136 66 149 78 153 102"
        stroke="#04060f"
        strokeWidth="6"
        fill="none"
        opacity="0.65"
        strokeLinecap="round"
      />
      {/* 帽檐边缘光 */}
      <path
        d="M120 14 C104 18 88 28 76 44 C64 60 59 79 60 100"
        stroke="#4f46e5"
        strokeWidth="3"
        fill="none"
        opacity="0.5"
        strokeLinecap="round"
      />
      <path
        d="M180 100 C179 128 166 150 146 160"
        stroke="#7c3aed"
        strokeWidth="3"
        fill="none"
        opacity="0.35"
        strokeLinecap="round"
      />

      {/* 眼睛：光晕 + 竖瞳 */}
      <g filter="url(#omen-blur-eyes)" opacity="0.9">
        <rect x="99" y="98" width="8" height="20" rx="4" fill="#67e8f9" />
        <rect x="133" y="98" width="8" height="20" rx="4" fill="#67e8f9" />
      </g>
      <rect x="100" y="99" width="6" height="18" rx="3" fill="#c9f6ff" />
      <rect x="134" y="99" width="6" height="18" rx="3" fill="#c9f6ff" />

      {/* 飘散的小烟点 */}
      <circle cx="58" cy="228" r="5" fill="#818cf8" opacity="0.35" />
      <circle cx="188" cy="212" r="4" fill="#818cf8" opacity="0.3" />
      <circle cx="180" cy="150" r="3" fill="#a78bfa" opacity="0.4" />
    </svg>
  );
}
