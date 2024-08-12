import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const SettingsPage = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-gray-800 text-white rounded"
      >
        Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
};

export default SettingsPage;
