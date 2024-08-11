import React, { useState } from 'react';


const priorityColors = {
  Low: 'bg-green-500',
  Medium: 'bg-yellow-500',
  High: 'bg-red-500',
};

const TaskForm = ({ task = {}, onSave, onCancel }) => {
  const [name, setName] = useState(task.name || '');
  const [description, setDescription] = useState(task.description || '');
  const [dueDate, setDueDate] = useState(task.dueDate || '');
  const [priority, setPriority] = useState(task.priority || 'Low');
  const [status, setStatus] = useState(task.status || 'To Do');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: task.id, name, description, dueDate, priority, status });
  };

  return (
    <div className="flex items-center justify-center mx-4 my-8">
      <div className="bg-gray-800 p-6 rounded-xl shadow-2xl w-full max-w-lg relative">
        <h2 className="text-3xl text-white font-semibold mb-6">
          {task.id ? 'Edit Task' : 'Create Task'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="text-gray-300 block mb-2">Task Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              placeholder="Enter task name"
            />
          </div>
          <div className="mb-5">
            <label className="text-gray-300 block mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              placeholder="Enter task description"
            />
          </div>
          <div className="mb-5">
            <label className="text-gray-300 block mb-2">Due Date</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-5">
            <label className="text-gray-300 block mb-2">Priority</label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg ${priorityColors[priority]} text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
              <option value="Low" className="bg-green-500">
                Low
              </option>
              <option value="Medium" className="bg-yellow-500">
                Medium
              </option>
              <option value="High" className="bg-red-500">
                High
              </option>
            </select>
          </div>
          <div className="mb-5">
            <label className="text-gray-300 block mb-2">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
            >
              {task.id ? 'Save Changes' : 'Create Task'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
