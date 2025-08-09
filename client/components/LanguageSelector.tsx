import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Globe } from 'lucide-react';
import { useLanguage, Language, languageNames, languageFlags } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages: Language[] = ['fr', 'mg', 'en', 'pt'];

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="text-green-100 hover:text-green-400 hover:bg-green-500/10 border border-green-400/20 backdrop-blur-xl"
      >
        <Globe className="mr-2 h-4 w-4" />
        <span className="mr-1">{languageFlags[language]}</span>
        <span className="hidden sm:inline">{languageNames[language]}</span>
        <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            />
            
            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-full mt-2 w-48 bg-slate-900/95 backdrop-blur-xl border border-green-400/30 rounded-lg shadow-xl z-50"
            >
              <div className="p-2">
                {languages.map((lang) => (
                  <motion.button
                    key={lang}
                    onClick={() => handleLanguageChange(lang)}
                    className={`w-full flex items-center px-3 py-2 rounded-md transition-all duration-200 ${
                      language === lang
                        ? 'bg-green-500/20 text-green-400 border border-green-400/30'
                        : 'text-green-100 hover:bg-green-500/10 hover:text-green-400'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="mr-3 text-lg">{languageFlags[lang]}</span>
                    <span className="font-medium">{languageNames[lang]}</span>
                    {language === lang && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-auto w-2 h-2 bg-green-400 rounded-full"
                      />
                    )}
                  </motion.button>
                ))}
              </div>
              
              <div className="border-t border-green-400/20 p-2">
                <div className="text-xs text-green-300 text-center">
                  🌍 Multilingue
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
