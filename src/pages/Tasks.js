// pages/Tasks.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CreateTask from '../components/CreateTask';
import TaskList from '../components/TaskList';

const initialTasks = [
  { id: 1, name: 'Task 1', description: 'Description for Task 1', dueDate: '2024-08-20', priority: 'Medium', status: 'To Do' },
  { id: 2, name: 'Task 2', description: 'Description for Task 2', dueDate: '2024-08-22', priority: 'High', status: 'In Progress' },
  { id: 3, name: 'Task 3', description: 'Description for Task 3', dueDate: '2024-08-25', priority: 'Low', status: 'Completed' },
];

function Tasks() {
  const [tasks, setTasks] = useState(initialTasks);

  const handleCreateTask = (task) => {
    const newTask = { id: tasks.length + 1, ...task }; // Simple ID assignment
    setTasks([...tasks, newTask]);
  };

  const handleUpdateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-8"
    >
      <h1 className="text-2xl font-bold mb-4">Tasks</h1>
      <CreateTask onCreateTask={handleCreateTask} />
      <TaskList tasks={tasks} onUpdateTask={handleUpdateTask} onDeleteTask={handleDeleteTask} />
    </motion.div>
  );
}

export default Tasks;