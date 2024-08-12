// components/UpcomingDeadlines.js
import React from 'react';

const UpcomingDeadlines = ({ tasks }) => {
  const upcomingTasks = tasks.filter(task => new Date(task.dueDate) > new Date()).slice(0, 5);

  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4">
      <h2 className="text-xl font-bold">Upcoming Deadlines</h2>
      <ul>
        {upcomingTasks.map(task => (
          <li key={task.id} className="flex justify-between">
            <span>{task.name}</span>
            <span>{new Date(task.dueDate).toLocaleDateString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingDeadlines;