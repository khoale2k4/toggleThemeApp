import React, { useState, useEffect } from 'react';

const ToggleTheme = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={handleToggle} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};

export default ToggleTheme;
