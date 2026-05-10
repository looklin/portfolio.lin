import { useLanguage } from '../../context';

const MobileHeader = () => {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-script text-gray-900">{t.logo}</div>
        <div className="flex items-center gap-4">
          <a href="mailto:linnanly@gmail.com" className="text-xs text-gray-600 font-medium">
            {t.contactMe}
          </a>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
