import React, { useState } from 'react';

const TaskForm = ({ onSubmit, initialTask = {} }) => {
  const [task, setTask] = useState(initialTask);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        value={task.name || ''}
        onChange={handleChange}
        placeholder="Task Name"
        className="w-full p-2 border border-gray-300 rounded dark:border-gray-600 dark:bg-gray-800 dark:text-white"
      />
      <textarea
        name="description"
        value={task.description || ''}
        onChange={handleChange}
        placeholder="Task Description"
        className="w-full p-2 border border-gray-300 rounded dark:border-gray-600 dark:bg-gray-800 dark:text-white"
      />
      <input
        type="date"
        name="dueDate"
        value={task.dueDate || ''}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded dark:border-gray-600 dark:bg-gray-800 dark:text-white"
      />
      <select
        name="priority"
        value={task.priority || 'Low'}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded dark:border-gray-600 dark:bg-gray-800 dark:text-white"
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <select
        name="status"
        value={task.status || 'To Do'}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded dark:border-gray-600 dark:bg-gray-800 dark:text-white"
      >
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded dark:bg-blue-700 dark:text-gray-200">
        Save Task
      </button>
    </form>
  );
};

export default TaskForm;
