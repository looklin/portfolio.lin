import heroImg from '../assets/hero.png';

// 共享作品集数据 - PC 和 Mobile 共同使用
// 使用本地 hero.png 作为所有作品封面的 mock 图片
const mockCover = heroImg;
// mock 源码地址
const mockSourceUrl = 'https://github.com/your-username/your-repo';

export const portfolioCategories = [
  {
    id: '01',
    title: { en: 'Branding', zh: '品牌设计' },
    works: [
      { id: 1, cover: mockCover, sourceUrl: mockSourceUrl, title: { en: 'Brand Identity A', zh: '品牌标识 A' } },
      { id: 2, cover: mockCover, sourceUrl: mockSourceUrl, title: { en: 'Brand Identity B', zh: '品牌标识 B' } },
      { id: 3, cover: mockCover, sourceUrl: mockSourceUrl, title: { en: 'Brand Identity C', zh: '品牌标识 C' } },
    ],
  },
  {
    id: '02',
    title: { en: 'Motion Design', zh: '动态设计' },
    works: [
      { id: 1, cover: mockCover, sourceUrl: mockSourceUrl, title: { en: 'Motion Project A', zh: '动态项目 A' } },
      { id: 2, cover: mockCover, sourceUrl: mockSourceUrl, title: { en: 'Motion Project B', zh: '动态项目 B' } },
      { id: 3, cover: mockCover, sourceUrl: mockSourceUrl, title: { en: 'Motion Project C', zh: '动态项目 C' } },
      { id: 4, cover: mockCover, sourceUrl: mockSourceUrl, title: { en: 'Motion Project D', zh: '动态项目 D' } },
    ],
  },
  {
    id: '03',
    title: { en: 'UI & UX', zh: 'UI & UX' },
    works: [
      { id: 1, cover: mockCover, sourceUrl: mockSourceUrl, title: { en: 'App Design A', zh: '应用设计 A' } },
      { id: 2, cover: mockCover, sourceUrl: mockSourceUrl, title: { en: 'App Design B', zh: '应用设计 B' } },
      { id: 3, cover: mockCover, sourceUrl: mockSourceUrl, title: { en: 'App Design C', zh: '应用设计 C' } },
      { id: 4, cover: mockCover, sourceUrl: mockSourceUrl, title: { en: 'App Design D', zh: '应用设计 D' } },
      { id: 5, cover: mockCover, sourceUrl: mockSourceUrl, title: { en: 'App Design E', zh: '应用设计 E' } },
    ],
  },
  {
    id: '04',
    title: { en: 'Graphic Design', zh: '平面设计' },
    works: [
      { id: 1, cover: mockCover, sourceUrl: mockSourceUrl, title: { en: 'Graphic Work A', zh: '平面作品 A' } },
      { id: 2, cover: mockCover, sourceUrl: mockSourceUrl, title: { en: 'Graphic Work B', zh: '平面作品 B' } },
      { id: 3, cover: mockCover, sourceUrl: mockSourceUrl, title: { en: 'Graphic Work C', zh: '平面作品 C' } },
    ],
  },
  {
    id: '05',
    title: { en: '3D Animation', zh: '3D 动画' },
    works: [
      { id: 1, cover: mockCover, sourceUrl: mockSourceUrl, title: { en: '3D Project A', zh: '3D 项目 A' } },
      { id: 2, cover: mockCover, sourceUrl: mockSourceUrl, title: { en: '3D Project B', zh: '3D 项目 B' } },
      { id: 3, cover: mockCover, sourceUrl: mockSourceUrl, title: { en: '3D Project C', zh: '3D 项目 C' } },
      { id: 4, cover: mockCover, sourceUrl: mockSourceUrl, title: { en: '3D Project D', zh: '3D 项目 D' } },
    ],
  },
];

export const friendLinks = [
  { name: { en: 'Portfolio Site 1', zh: '作品集网站 1' }, url: '#' },
  { name: { en: 'Designer Blog', zh: '设计师博客' }, url: '#' },
  { name: { en: 'Creative Studio', zh: '创意工作室' }, url: '#' },
  { name: { en: 'Design Community', zh: '设计社区' }, url: '#' },
];
