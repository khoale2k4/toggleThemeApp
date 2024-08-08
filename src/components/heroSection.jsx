import React from 'react';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="flex justify-center items-center p-12 bg-gray-100 dark:bg-gray-800">
      <div className="hero-image">
        <img src="/images/main_image.png" alt="Hero Image" className="max-w-[600px] mr-12" />
      </div>
      <div className="hero-text max-w-[500px] text-center">
        <img src="/images/leaf.png" alt="Leaf Photo" />
        <h1 className="text-3xl text-gray-800 dark:text-white">{t('homeGreeting')}</h1>
        <p className="text-lg text-gray-600 my-5 dark:text-white">
        {t('homeContent')}
        </p>
        <a href="#" className="inline-block px-5 py-3 bg-green-600 text-white rounded font-bold hover:bg-green-700">{t('shopNowButton')}</a>
      </div>
    </section>
  );
};

export default HeroSection;
