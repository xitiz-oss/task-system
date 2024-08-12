// components/CreateTask.js
import React, { useState } from 'react';

const CreateTask = ({ onCreateTask }) => {
  const [task, setTask] = useState({ name: '', description: '', dueDate: '', priority: 'Medium', status: 'To Do' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateTask(task);
    setTask({ name: '', description: '', dueDate: '', priority: 'Medium', status: 'To Do' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 mb-4">
      <h2 className="text-xl font-bold">Create Task</h2>
      <input type="text" name="name" placeholder="Task Name" value={task.name} onChange={handleChange} required className="block w-full p-2 border mb-2" />
      <textarea name="description" placeholder="Description" value={task.description} onChange={handleChange} className="block w-full p-2 border mb-2" />
      <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} required className="block w-full p-2 border mb-2" />
      <select name="priority" value={task.priority} onChange={handleChange} className="block w-full p-2 border mb-2">
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Task</button>
    </form>
  );
};

export default CreateTask;