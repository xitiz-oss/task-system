// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
  const { toggleTheme } = useTheme();

  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-gray-400">
            Dashboard
          </Link>
          <Link to="/tasks" className="hover:text-gray-400">
            Tasks
          </Link>
          <Link to="/projects" className="hover:text-gray-400">
            Projects
          </Link>
          <Link to="/settings" className="hover:text-gray-400">
            Settings
          </Link>
        </div>
        <button onClick={toggleTheme} className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded">
          Toggle Theme
        </button>
      </div>
    </nav>
  );
}

export default Navbar;