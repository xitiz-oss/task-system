import React, { useContext } from 'react';
import Sidebar from '../components/Sidebar';
import { ThemeContext } from '../context/ThemeContext';

const Settings = () => {
  const { state, dispatch } = useContext(ThemeContext);

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="p-6 flex-1">
        <h1 className="text-2xl font-bold mb-4">Settings</h1>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <button
            onClick={toggleTheme}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Toggle to {state.theme === 'light' ? 'Dark' : 'Light'} Mode
          </button>
        </div>
      </main>
    </div>
  );
};

export default Settings;
