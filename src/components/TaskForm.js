import React, { useState } from 'react';

const TaskForm = ({ onSave, initialTask = {} }) => {
  const [task, setTask] = useState(initialTask);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(task);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        value={task.name || ''}
        onChange={handleChange}
        placeholder="Task Name"
        className="w-full p-2 border rounded"
      />
      <textarea
        name="description"
        value={task.description || ''}
        onChange={handleChange}
        placeholder="Description"
        className="w-full p-2 border rounded"
      />
      <input
        type="date"
        name="dueDate"
        value={task.dueDate || ''}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <select
        name="priority"
        value={task.priority || 'Medium'}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <select
        name="status"
        value={task.status || 'To Do'}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      >
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Save</button>
    </form>
  );
};

export default TaskForm;
