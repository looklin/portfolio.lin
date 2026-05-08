import { useLanguage } from '../../context';
import NavColumn from './NavColumn';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useLanguage();

  const productLinks = [
    { label: t.product, href: '#' },
    { label: t.features, href: '#' },
    { label: t.pricing, href: '#' },
    { label: t.bookADemo, href: '#' },
  ];

  const exploreLinks = [
    { label: t.explore, href: '#' },
    { label: t.events, href: '#' },
    { label: t.blog, href: '#' },
  ];

  const contactLinks = [
    { label: t.contactMe },
    { label: '+86 13280 972 972' },
    { label: 'linnanly@gmail.com', href: 'mailto:linnanly@gmail.com' },
  ];

  return (
    <header className="flex justify-between items-start px-10 pt-10 font-sans text-xs tracking-widest font-bold">
      <div className="text-4xl font-script tracking-normal capitalize lowercase">{t.logo}</div>
      
      <NavColumn links={productLinks} />
      <NavColumn links={exploreLinks} />
      <NavColumn links={contactLinks} />
      
      <LanguageSwitcher />
    </header>
  );
};

export default Header;