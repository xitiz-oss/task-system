import React from 'react';
import Sidebar from '../components/Sidebar';
import { motion } from 'framer-motion';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="p-6 flex-1">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            {/* Dashboard summary */}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Dashboard;
