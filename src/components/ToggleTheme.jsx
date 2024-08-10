import React, { useState, useEffect } from 'react';

const ToggleTheme = () => {
  // State to store the current theme
  const [theme, setTheme] = useState(() => {
    // Get the saved theme from localStorage or default to 'light'
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  useEffect(() => {
    // Apply the theme to the document
    document.documentElement.classList.toggle('dark', theme === 'dark');
    // Save the theme to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleToggle = () => {
    // Toggle between 'light' and 'dark' themes
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};

export default ToggleTheme;
