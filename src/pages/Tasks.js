// pages/Tasks.js
import React from 'react';
import { motion } from 'framer-motion';
import CreateTask from '../components/CreateTask';
import TaskList from '../components/TaskList';

function Tasks() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-8"
    >
      <h1 className="text-2xl font-bold mb-4">Tasks</h1>
      <CreateTask />
      <TaskList />
    </motion.div>
  );
}

export default Tasks;