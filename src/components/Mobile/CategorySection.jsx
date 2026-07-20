import { useState } from 'react';
import { useLanguage } from '../../context';
import WorkCard from './WorkCard';
import WorkDialog from '../WorkDialog';

const CategorySection = ({ category }) => {
  const { lang } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedWork, setSelectedWork] = useState(null);

  return (
    <section className="mb-8 px-4">
      <button 
        className="w-full flex items-center justify-between mb-4"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="text-2xl font-bold text-gray-900">{category.title[lang]}</h2>
        <svg 
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div className={`transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
          {category.works.map((work) => (
            <WorkCard 
              key={work.id}
              cover={work.cover}
              title={work.title[lang]}
              onClick={() => setSelectedWork(work)}
            />
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-2">{category.works.length} {lang === 'zh' ? '个作品' : 'works'}</p>
      </div>

      {selectedWork && (
        <WorkDialog 
          work={selectedWork} 
          onClose={() => setSelectedWork(null)} 
        />
      )}
    </section>
  );
};

export default CategorySection;
