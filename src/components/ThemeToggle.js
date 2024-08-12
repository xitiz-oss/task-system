import React from 'react';
import { useTheme } from '../context/ThemeContext';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center">
      <label className="mr-2 text-lg">{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</label>
      <input
        type="checkbox"
        checked={theme === 'dark'}
        onChange={toggleTheme}
        className="toggle-checkbox hidden"
      />
      <label
        htmlFor="toggle"
        className="toggle-label cursor-pointer w-12 h-6 bg-gray-300 rounded-full relative transition duration-300 ease-in-out"
      >
        <span
          className={`toggle-dot absolute w-6 h-6 bg-white rounded-full shadow-md transform transition duration-300 ease-in-out ${
            theme === 'dark' ? 'translate-x-6' : ''
          }`}
        ></span>
      </label>
    </div>
  );
}

export default ThemeToggle;