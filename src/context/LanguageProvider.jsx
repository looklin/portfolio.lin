import { useState, useCallback } from 'react';
import LanguageContext from './languageContext';
import { translations, supportedLanguages } from '../config/translations';

const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');

  const t = translations[lang];

  const changeLanguage = useCallback((newLang) => {
    if (supportedLanguages.includes(newLang)) {
      setLang(newLang);
    }
  }, []);

  const value = {
    lang,
    setLang: changeLanguage,
    t,
    translations,
    supportedLanguages,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;