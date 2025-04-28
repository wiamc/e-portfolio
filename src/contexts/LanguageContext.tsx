import React, { createContext, useContext, useState, useEffect } from 'react';
import translations from '../data/translations';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = window.localStorage.getItem('language') as Language;
      if (savedLanguage) return savedLanguage;
      
      // Default to French as the CV is in French
      return 'fr';
    }
    return 'fr';
  });

  useEffect(() => {
    window.localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    const translationObj = translations[language] || {};
    return translationObj[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}