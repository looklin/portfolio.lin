import heroImg from '../assets/hero.png';
import easytierImg from '../assets/1/easytier.png';
import hmiImg from '../assets/1/hmi.png';
import firePosImg from '../assets/2/火烧POS.png';
import glassesPosImg from '../assets/2/眼镜POS.png';
import virtualTryOnImg from '../assets/2/虚拟试戴.png';
import bookCornerImg from '../assets/3/图书角.png';
import learningAnalysisImg from '../assets/3/学情分析.png';
import tugOfWarImg from '../assets/3/拔河.png';
import netImg from '../assets/4/net.jpeg';
import nodeImg from '../assets/4/node.jpeg';
import boardCardImg from '../assets/4/板卡.jpeg';
import aiImg from '../assets/5/AI.jpeg';
import lynxImg from '../assets/5/Lynx.png';

// 共享作品集数据 - PC 和 Mobile 共同使用
// sourceUrl 为 null 表示暂无源码或涉及保密

export const portfolioCategories = [
  {
    id: '01',
    title: { en: 'Industrial Production Interaction', zh: '工业生产交互' },
    works: [
      { id: 1, cover: easytierImg, sourceUrl: 'https://github.com/looklin/lentonTier', sourceNote: null, title: { en: 'Easytier', zh: 'Easytier' } },
      { id: 2, cover: hmiImg, sourceUrl: 'https://github.com/looklin/SnapHelm', sourceNote: null, title: { en: 'HMI', zh: 'HMI' } },
    ],
  },
  {
    id: '02',
    title: { en: 'Cross-Industry Full-Stack Solutions', zh: '跨行业全栈解决方案' },
    works: [
      { id: 1, cover: firePosImg, sourceUrl: null, sourceNote: { en: 'Confidential, no source available', zh: '涉及保密，暂无源码' }, title: { en: 'Fire POS', zh: '火烧 POS' } },
      { id: 2, cover: glassesPosImg, sourceUrl: null, sourceNote: { en: 'Source code being uploaded', zh: '源码优化上传中' }, title: { en: 'Glasses POS', zh: '眼镜 POS' } },
      { id: 3, cover: virtualTryOnImg, sourceUrl: 'https://github.com/looklin/LensLook', sourceNote: null, title: { en: 'Virtual Try-On', zh: '虚拟试戴' } },
    ],
  },
  {
    id: '03',
    title: { en: 'Education Products', zh: '教育产品' },
    works: [
      { id: 1, cover: bookCornerImg, sourceUrl: 'https://github.com/looklin/OpenBookCorner', sourceNote: null, title: { en: 'Book Corner', zh: '图书角' } },
      { id: 2, cover: learningAnalysisImg, sourceUrl: null, sourceNote: { en: 'Source code being uploaded', zh: '源码优化上传中' }, title: { en: 'Learning Analysis', zh: '学情分析' } },
      { id: 3, cover: tugOfWarImg, sourceUrl: 'https://github.com/looklin/Lynton', sourceNote: null, title: { en: 'Tug of War', zh: '拔河' } },
    ],
  },
  {
    id: '04',
    title: { en: 'Technical Infrastructure', zh: '技术基础设施' },
    works: [
      { id: 1, cover: netImg, sourceUrl: 'https://github.com/looklin/net-keyence-hostlink', sourceNote: null, title: { en: '.NET', zh: '.NET' } },
      { id: 2, cover: nodeImg, sourceUrl: 'https://github.com/looklin/node-keyence-hostlink', sourceNote: null, title: { en: 'Node.js', zh: 'Node.js' } },
      { id: 3, cover: boardCardImg, sourceUrl: 'https://github.com/looklin/LT.MC-Engine', sourceNote: null, title: { en: 'Board Card', zh: '板卡' } },
    ],
  },
  {
    id: '05',
    title: { en: 'AI Related', zh: 'AI 相关' },
    works: [
      { id: 1, cover: aiImg, sourceUrl: null, sourceNote: { en: 'Source code being uploaded', zh: '源码优化上传中' }, title: { en: 'AI', zh: 'AI' } },
      { id: 2, cover: lynxImg, sourceUrl: 'https://github.com/looklin/LynxCMS', sourceNote: null, title: { en: 'Lynx', zh: 'Lynx' } },
    ],
  },
];

export const friendLinks = [
  { name: { en: 'Portfolio Site 1', zh: '作品集网站 1' }, url: '#' },
  { name: { en: 'Designer Blog', zh: '设计师博客' }, url: '#' },
  { name: { en: 'Creative Studio', zh: '创意工作室' }, url: '#' },
  { name: { en: 'Design Community', zh: '设计社区' }, url: '#' },
];
