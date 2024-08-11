import React from 'react';

const TaskItem = ({ task, onEdit, onDelete }) => {
  return (
    <div className="grid grid-cols-5 items-center text-white mb-2 bg-gray-700 p-2 rounded">
      <div>{task.name}</div>
      <div>{task.dueDate}</div>
      <div>{task.priority}</div>
      <div>{task.status}</div>
      <div className="flex space-x-2">
        <button onClick={() => onEdit(task)} className="text-blue-400 hover:text-blue-600">Edit</button>
        <button onClick={() => onDelete(task)} className="text-red-400 hover:text-red-600">Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
