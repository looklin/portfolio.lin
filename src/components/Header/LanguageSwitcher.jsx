import { useLanguage } from '../../context';

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="absolute top-2 right-2 font-sans text-xs tracking-widest font-bold flex items-center gap-1">
      <span 
        onClick={() => setLang('zh')}
        className={`cursor-pointer transition-colors ${lang === 'zh' ? 'text-brand-yellow' : 'hover:text-brand-yellow'}`}
      >
        中文
      </span>
      <span className="text-gray-400">/</span>
      <span 
        onClick={() => setLang('en')}
        className={`cursor-pointer transition-colors ${lang === 'en' ? 'text-brand-yellow' : 'hover:text-brand-yellow'}`}
      >
        English
      </span>
    </div>
  );
};

export default LanguageSwitcher;