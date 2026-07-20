import { useLanguage } from '../../context';
import { portfolioCategories } from '../../config/portfolioData';
import CategorySection from './CategorySection';
import FriendLinks from './FriendLinks';

const MobilePortfolio = () => {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-white pb-12">
      <div className="max-w-lg mx-auto">
        <section className="px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {lang === 'zh' ? '作品集' : 'Portfolio'}
          </h1>
          <p className="text-sm text-gray-500">
            {lang === 'zh' ? '探索我的创意作品' : 'Explore my creative works'}
          </p>
        </section>

        {portfolioCategories.map((category) => (
          <CategorySection key={category.id} category={category} />
        ))}

        <FriendLinks />
      </div>
    </div>
  );
};

export default MobilePortfolio;
