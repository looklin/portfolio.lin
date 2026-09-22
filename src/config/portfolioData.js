import heroImg from '../assets/hero.webp';
import easytierImg from '../assets/1/easytier.webp';
import hmiImg from '../assets/1/hmi.webp';
import mesImg from '../assets/1/mes.webp';
import dashboardImg from '../assets/1/dashboard.webp';
import firePosImg from '../assets/2/火烧POS.webp';
import glassesPosImg from '../assets/2/眼镜POS.webp';
import virtualTryOnImg from '../assets/2/虚拟试戴.webp';
import lineSideWarehouseImg from '../assets/2/线边仓.webp';
import bookCornerImg from '../assets/3/图书角.webp';
import learningAnalysisImg from '../assets/3/学情分析.webp';
import tugOfWarImg from '../assets/3/拔河.webp';
import netImg from '../assets/4/net.webp';
import nodeImg from '../assets/4/node.webp';
import boardCardImg from '../assets/4/板卡.webp';
import aiImg from '../assets/5/AI.webp';
import lynxImg from '../assets/5/Lynx.webp';

// 共享作品集数据 - PC 和 Mobile 共同使用
// sourceUrl 为 null 表示暂无源码或涉及保密
// intro: 项目简介，悬停缩略图浮层与作品弹窗共用

export const portfolioCategories = [
  {
    id: '01',
    title: { en: 'Industrial Production Interaction', zh: '工业生产交互' },
    works: [
      {
        id: 1,
        cover: easytierImg,
        sourceUrl: 'https://github.com/looklin/lentonTier',
        sourceNote: null,
        title: { en: 'Easytier', zh: 'Easytier' },
        intro: {
          en: 'Industrial remote networking & debug tool built on EasyTier (Rust), centrally connecting industrial PCs and PLCs.',
          zh: '基于 EasyTier 的工业远程组网调试工具，Rust 构建，中心化连接工控机与 PLC。',
        },
      },
      {
        id: 2,
        cover: hmiImg,
        sourceUrl: 'https://github.com/looklin/SnapHelm',
        sourceNote: null,
        title: { en: 'HMI', zh: 'HMI' },
        intro: {
          en: 'Modern HMI platform on Android tablets (Kotlin/Compose) + Node.js/Web, replacing Pro-face touch panels with multi-brand PLC support.',
          zh: '安卓平板 + Node.js/Web 打造的现代 HMI 平台，替代 Pro-face 触控屏，支持多品牌 PLC 协议。',
        },
      },
      {
        id: 3,
        cover: mesImg,
        sourceUrl: null,
        sourceNote: { en: 'Source code being uploaded', zh: '源码优化上传中' },
        title: { en: 'MES: Control+Trace+All-in-One', zh: 'MES：控制+追溯+三合一' },
        intro: {
          en: 'All-in-one MES combining equipment control and production traceability, with remote maintenance and device management.',
          zh: '集设备控制、生产追溯于一体的 MES 系统，支持远程运维与设备管理。',
        },
      },
      {
        id: 4,
        cover: dashboardImg,
        sourceUrl: 'https://github.com/looklin/portfolio.lin/releases/tag/v1.0.0',
        sourceNote: null,
        title: { en: 'Dashboard + PLC', zh: '数字看板 + PLC' },
        intro: {
          en: 'Digital dashboard fed by real-time PLC data for production line monitoring.',
          zh: '通过 PLC 实时数据驱动的数字看板，监控产线运行状态。',
        },
      },
    ],
  },
  {
    id: '02',
    title: { en: 'Cross-Industry Full-Stack Solutions', zh: '跨行业全栈解决方案' },
    works: [
      {
        id: 1,
        cover: firePosImg,
        sourceUrl: null,
        sourceNote: { en: 'Source code being uploaded', zh: '源码优化上传中' },
        title: { en: 'Fire POS', zh: '火烧 POS' },
        intro: {
          en: 'All-in-one F&B POS covering ordering, checkout and store management.',
          zh: '餐饮门店一体化 POS 系统，覆盖点餐、收银与门店管理。',
        },
      },
      {
        id: 2,
        cover: glassesPosImg,
        sourceUrl: null,
        sourceNote: { en: 'Source code being uploaded', zh: '源码优化上传中' },
        title: { en: 'Glasses POS', zh: '眼镜 POS' },
        intro: {
          en: 'POS for optical stores with prescription records and inventory management.',
          zh: '眼镜门店销售管理 POS，支持验光单据与库存管理。',
        },
      },
      {
        id: 3,
        cover: virtualTryOnImg,
        sourceUrl: 'https://github.com/looklin/LensLook',
        sourceNote: null,
        title: { en: 'Virtual Try-On', zh: '虚拟试戴' },
        intro: {
          en: 'Real-time 3D glasses virtual try-on with MediaPipe face tracking and Three.js rendering.',
          zh: 'MediaPipe 人脸追踪 + Three.js 渲染的 3D 眼镜实时虚拟试戴。',
        },
      },
      {
        id: 4,
        cover: lineSideWarehouseImg,
        sourceUrl: null,
        sourceNote: { en: 'Source code being uploaded', zh: '源码优化上传中' },
        title: { en: 'Line-side Warehouse', zh: '线边仓' },
        intro: {
          en: 'Line-side warehouse management for factory production lines, covering material calls, replenishment and inventory.',
          zh: '工厂产线的线边仓管理系统，覆盖叫料配送、补料与库存管理。',
        },
      },
    ],
  },
  {
    id: '03',
    title: { en: 'Education Products', zh: '教育产品' },
    works: [
      {
        id: 1,
        cover: bookCornerImg,
        sourceUrl: 'https://github.com/looklin/OpenBookCorner',
        sourceNote: null,
        title: { en: 'Book Corner', zh: '图书角' },
        intro: {
          en: 'Open book-sharing platform to browse and share books (React/Vite + Node.js).',
          zh: '开放图书共享平台，支持书籍浏览与分享，React/Vite 前端 + Node.js 后端。',
        },
      },
      {
        id: 2,
        cover: learningAnalysisImg,
        sourceUrl: null,
        sourceNote: { en: 'Source code being uploaded', zh: '源码优化上传中' },
        title: { en: 'Learning Analysis', zh: '学情分析' },
        intro: {
          en: 'Visual learning analytics that turns student data into teaching decisions.',
          zh: '学情数据可视化分析，辅助教师掌握学情、优化教学决策。',
        },
      },
      {
        id: 3,
        cover: tugOfWarImg,
        sourceUrl: 'https://github.com/looklin/Lynton',
        sourceNote: null,
        title: { en: 'Tug of War', zh: '拔河' },
        intro: {
          en: 'Duolingo-style tug-of-war quiz game for classrooms (React + Node + MongoDB).',
          zh: '课堂答题拔河 PK 游戏，React + Node + MongoDB。',
        },
      },
    ],
  },
  {
    id: '04',
    title: { en: 'Technical Infrastructure', zh: '技术基础设施' },
    works: [
      {
        id: 1,
        cover: netImg,
        sourceUrl: 'https://github.com/looklin/net-keyence-hostlink',
        sourceNote: null,
        title: { en: '.NET', zh: '.NET' },
        intro: {
          en: 'Keyence PLC HostLink communication library in C#/.NET for reading and writing PLC data.',
          zh: 'C#/.NET 实现的基恩士 PLC Hostlink 上位链路通信库，读写 PLC 数据。',
        },
      },
      {
        id: 2,
        cover: nodeImg,
        sourceUrl: 'https://github.com/looklin/node-keyence-hostlink',
        sourceNote: null,
        title: { en: 'Node.js', zh: 'Node.js' },
        intro: {
          en: 'Node.js/TypeScript library for Keyence PLC over Host Link protocol via TCP/IP.',
          zh: 'Node.js/TypeScript 基恩士 PLC 通信库，走 Host Link 协议通过 TCP/IP 读写。',
        },
      },
      {
        id: 3,
        cover: boardCardImg,
        sourceUrl: 'https://github.com/looklin/LT.MC-Engine',
        sourceNote: null,
        title: { en: 'Board Card', zh: '板卡' },
        intro: {
          en: '.NET motion-control workflow engine: PLC-style start/stop, middleware pipelines and hardware abstraction.',
          zh: '.NET 运动控制流程引擎：类 PLC 启停控制、中间件管道与硬件抽象。',
        },
      },
    ],
  },
  {
    id: '05',
    title: { en: 'AI Related', zh: 'AI 相关' },
    works: [
      {
        id: 1,
        cover: aiImg,
        sourceUrl: null,
        sourceNote: { en: 'Source code being uploaded', zh: '源码优化上传中' },
        title: { en: 'AI', zh: 'AI' },
        intro: {
          en: 'Explorations of LLM-powered applications.',
          zh: '基于大模型的智能应用探索。',
        },
      },
      {
        id: 2,
        cover: lynxImg,
        sourceUrl: 'https://github.com/looklin/LynxCMS',
        sourceNote: null,
        title: { en: 'Lynx', zh: 'Lynx' },
        intro: {
          en: 'LLM-integrated content management system built on Next.js and Prisma.',
          zh: '基于 Next.js 与 Prisma 的 LLM 集成内容管理系统。',
        },
      },
    ],
  },
];

export const friendLinks = [
  { name: { en: 'Portfolio Site 1', zh: '作品集网站 1' }, url: '#' },
  { name: { en: 'Designer Blog', zh: '设计师博客' }, url: '#' },
  { name: { en: 'Creative Studio', zh: '创意工作室' }, url: '#' },
  { name: { en: 'Design Community', zh: '设计社区' }, url: '#' },
];
