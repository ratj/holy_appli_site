import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'fr' | 'mg' | 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

// Import des traductions
import frTranslations from '../locales/fr.json';
import mgTranslations from '../locales/mg.json';
import enTranslations from '../locales/en.json';
import ptTranslations from '../locales/pt.json';

const translations: Record<Language, Record<string, string>> = {
  fr: frTranslations,
  mg: mgTranslations,
  en: enTranslations,
  pt: ptTranslations
};

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Récupérer la langue sauvegardée ou utiliser 'fr' par défaut
    const saved = localStorage.getItem('holy-appli-language');
    return (saved as Language) || 'fr';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('holy-appli-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
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

export const languageNames: Record<Language, string> = {
  fr: 'Français',
  mg: 'Malagasy',
  en: 'English',
  pt: 'Português'
};

export const languageFlags: Record<Language, string> = {
  fr: '🇫🇷',
  mg: '🇲🇬',
  en: '🇺🇸',
  pt: '🇵🇹'
};
