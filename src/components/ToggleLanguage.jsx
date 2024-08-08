import React from 'react';
import { useTranslation } from 'react-i18next';

const ToggleLanguage = () => {
  const { i18n } = useTranslation();

  const handleToggle = () => {
    const newLang = i18n.language === 'en' ? 'vi' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button onClick={handleToggle} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
      {i18n.language === 'en' ? '🇬🇧' : '🇻🇳'}
    </button>
  );
};

export default ToggleLanguage;
