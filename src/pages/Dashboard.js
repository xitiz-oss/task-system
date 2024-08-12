// pages/Dashboard.js
import React from 'react';
import { motion } from 'framer-motion';
import TaskSummary from '../components/TaskSummary';
import UpcomingDeadlines from '../components/UpcomingDeadlines';
import SearchBar from '../components/SearchBar';

function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-8"
    >
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TaskSummary />
        <UpcomingDeadlines />
      </div>
      <SearchBar />
    </motion.div>
  );
}

export default Dashboard;