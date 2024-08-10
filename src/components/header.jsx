import React, { useContext } from 'react';
import ToggleTheme from './ToggleTheme';
import { useTranslation } from 'react-i18next';
import ToggleLanguage from './ToggleLanguage';
import { UserContext } from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';
import { googleLogout } from '@react-oauth/google'; 

const Header = () => {
  const { t } = useTranslation();
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleNameClick = () => {
    if (user) {
      localStorage.removeItem('authToken');
      sessionStorage.removeItem('authToken');
      googleLogout(); 
      setUser(null); 
    }
    navigate('/auth/login');
  };

  return (
    <header className="flex justify-between items-center p-5 bg-white dark:bg-gray-500 text-black dark:text-white">
      <div className="flex items-center">
        <div className="logo">
          <a href="/">
            <img src="/images/logo.png" alt="Organic Store Logo" className="max-w-[170px]" />
          </a>
        </div>
        <nav className="ml-8">
          <ul className="flex items-center gap-12">
            <li><a href="#" className="text-gray-800 hover:text-green-600 dark:text-white">{t('everything')}</a></li>
            <li><a href="#" className="text-gray-800 hover:text-green-600 dark:text-white">{t('groceries')}</a></li>
            <li><a href="#" className="text-gray-800 hover:text-green-600 dark:text-white">{t('juice')}</a></li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center">
        <nav>
          <ul className="flex items-center gap-6">
            <li><a href="#" className="text-gray-800 hover:text-green-600 dark:text-white">{t('about')}</a></li>
            <li><a href="#" className="text-gray-800 hover:text-green-600 dark:text-white">{t('contact')}</a></li>
            <div className="cart">
              <a href="#" className="text-green-600 font-bold">£0.00 <span className="cart-icon">🛒</span></a>
            </div>
            <div className="account">
              <div onClick={handleNameClick} className="pr-5 text-gray-800 font-bold dark:text-white">
                {user ? user.name : 'Name'} <span>👤</span>
              </div>
            </div>
            <ToggleTheme />
            <ToggleLanguage />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
