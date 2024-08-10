import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const ToggleLanguage = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Initialize language from localStorage if available
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  const handleToggle = () => {
    const newLang = i18n.language === 'en' ? 'vi' : 'en';
    i18n.changeLanguage(newLang);
    // Save the new language to localStorage
    localStorage.setItem('language', newLang);
  };

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
    >
      {i18n.language === 'en' ? '🇬🇧' : '🇻🇳'}
    </button>
  );
};

export default ToggleLanguage;
