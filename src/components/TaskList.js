import React, { useState } from 'react';

const TaskList = ({ tasks, onDeleteTask, onEditTask }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search Tasks"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded mb-4"
      />
      <ul className="space-y-4">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className="border p-4 rounded flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-bold">{task.name}</h2>
              <p>{task.description}</p>
              <p>Due: {task.dueDate}</p>
              <p>Priority: {task.priority}</p>
              <p>Status: {task.status}</p>
            </div>
            <div>
              <button
                onClick={() => onEditTask(task.id)}
                className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => onDeleteTask(task.id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
