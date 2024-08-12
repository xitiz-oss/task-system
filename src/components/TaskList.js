// components/TaskList.js
import React from 'react';

const TaskList = ({ tasks, onUpdateTask, onDeleteTask }) => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">Task List</h2>
      <ul className="bg-white dark:bg-gray-700 rounded-lg shadow-md">
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center p-4 border-b dark:border-gray-600">
            <div>
              <h3 className="text-lg font-bold">{task.name}</h3>
              <p className="text-sm">{task.description}</p>
            </div>
            <div className="flex space-x-2">
              <button onClick={() => onUpdateTask(task)} className="text-blue-500 hover:underline">Edit</button>
              <button onClick={() => onDeleteTask(task.id)} className="text-red-500 hover:underline">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;