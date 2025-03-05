import React, { useEffect } from 'react';

const ThemeToggle = () => {
  // Set the initial theme based on localStorage when the component mounts
  useEffect(() => {
    // Check if a theme is stored in localStorage
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (localStorage.theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      // If no theme is stored, use system preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  // This function handles the theme toggle
  const handleToggleClick = () => {
    // Toggle theme
    const currentTheme = localStorage.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);

    document.documentElement.classList.toggle(
      'dark',
      currentTheme === 'dark'
    );
  };

  return (
    <button
      id="themeToggle"
      onClick={handleToggleClick}
      className="fixed top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-md dark:bg-darkPink-light/30 shadow-lg z-50 transition-all duration-300 hover:scale-110"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="sun hidden dark:block text-pink-light"
      >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="moon block dark:hidden text-pink-dark"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
};

export default ThemeToggle;
