import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="bg-gray-800 text-white h-full w-64 p-4 dark:bg-gray-900">
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/tasks">Tasks</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </nav>
  );
};

export default Sidebar;
