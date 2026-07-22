# Portfolio

基于 React + Vite + Tailwind CSS 构建的个人作品集网站，支持中英文双语切换，PC 和移动端自适应。

## 分类

- **工业生产交互** — Industrial Production Interaction
- **跨行业全栈解决方案** — Cross-Industry Full-Stack Solutions
- **教育产品** — Education Products
- **技术基础设施** — Technical Infrastructure
- **AI 相关** — AI Related

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | React 19 |
| 构建 | Vite 8 |
| 样式 | Tailwind CSS 3 |
| 字体 | Inter / Space Mono / Caveat |
| 语言 | JavaScript (ESM) |

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 项目结构

```
src/
├── assets/          # 图片资源（按分类分文件夹）
├── components/      # 组件
│   ├── Background/  # 背景
│   ├── Header/      # 顶部导航 & 语言切换
│   ├── Mobile/      # 移动端组件
│   ├── Tab/         # 分类标签页
│   └── TabGrid/     # PC 端网格布局
├── config/          # 数据 & 翻译配置
├── context/         # 语言上下文
├── hooks/           # 自定义 Hooks
├── App.jsx          # 根组件
└── main.jsx         # 入口
```

## 许可

MIT
