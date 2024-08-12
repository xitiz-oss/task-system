import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <>
        <div className="md:hidden p-4 bg-gray-800 text-white fixed top-0 left-0 w-full z-10">
          <button onClick={() => setIsOpen(!isOpen)}>
            Menu
          </button>
        </div>
        <motion.div
          initial={{ x: -250 }}
          animate={{ x: isOpen ? 0 : -250 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-800 h-screen w-64 text-white fixed md:static z-20"
        >
          <div className="p-4">
            <h2 className="text-2xl font-bold">Task Manager</h2>
          </div>
          <ul className="mt-6">
            <li className="p-4 hover:bg-gray-700">
              <Link to="/" onClick={() => setIsOpen(false)}>Dashboard</Link>
            </li>
            <li className="p-4 hover:bg-gray-700">
              <Link to="/tasks" onClick={() => setIsOpen(false)}>Tasks</Link>
            </li>
            <li className="p-4 hover:bg-gray-700">
              <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
            </li>
            <li className="p-4 hover:bg-gray-700">
              <Link to="/settings" onClick={() => setIsOpen(false)}>Settings</Link>
            </li>
          </ul>
        </motion.div>
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          ></div>
        )}
      </>
    );
  };
  

export default Sidebar;
