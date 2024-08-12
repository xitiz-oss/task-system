// components/TaskSummary.js
import React from 'react';

const TaskSummary = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.status === 'Completed').length;

  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4">
      <h2 className="text-xl font-bold">Task Summary</h2>
      <p>Total Tasks: {totalTasks}</p>
      <p>Completed Tasks: {completedTasks}</p>
    </div>
  );
};

export default TaskSummary;