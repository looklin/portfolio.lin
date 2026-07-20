import { useLanguage } from '../../context';
import { friendLinks } from '../../config/portfolioData';

const FriendLinks = () => {
  const { lang } = useLanguage();

  return (
    <section className="px-4 py-8 border-t border-gray-200 mt-8">
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        {lang === 'zh' ? '友情链接' : 'Friend Links'}
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {friendLinks.map((link, index) => (
          <a 
            key={index}
            href={link.url}
            className="p-4 bg-gray-50 rounded-xl text-center hover:bg-gray-100 transition-colors duration-200"
          >
            <span className="text-sm text-gray-700 font-medium">{link.name[lang]}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default FriendLinks;
