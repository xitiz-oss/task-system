import React from 'react';

const TaskItem = ({ task, onEdit, onDelete }) => {
  return (
    <div className="bg-gray-100 p-4 mb-2 rounded shadow-md">
      <h3 className="text-lg font-bold">{task.name}</h3>
      <p>{task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Priority: {task.priority}</p>
      <p>Status: {task.status}</p>
      <button onClick={() => onEdit(task)} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Edit</button>
      <button onClick={() => onDelete(task.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
    </div>
  );
};

export default TaskItem;
