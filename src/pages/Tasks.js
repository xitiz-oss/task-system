import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TaskForm from '../components/TaskForm';
import TaskItem from '../components/TaskItem';
import { motion } from 'framer-motion';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="p-6 flex-1">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold mb-4">Tasks</h1>
          <TaskForm onSave={addTask} />
          <div className="mt-6">
            {tasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                onEdit={editTask}
                onDelete={deleteTask}
              />
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Tasks;
