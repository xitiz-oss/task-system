import React, { useState } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import DeleteTaskModal from './DeleteTaskModal';

const initialTasks = [
  { id: 1, name: 'Task 1', description: 'Description 1', dueDate: '2024-08-15', priority: 'High', status: 'To Do' },
  { id: 2, name: 'Task 2', description: 'Description 2', dueDate: '2024-08-16', priority: 'Medium', status: 'In Progress' },
  // Add more tasks as needed
];

const TaskList = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteTask, setDeleteTask] = useState(null);

  const handleEdit = (task) => {
    setEditTask(task);
    setIsEditing(true);
  };

  const handleDelete = (task) => {
    setDeleteTask(task);
    setIsDeleting(true);
  };

  const handleSaveTask = (updatedTask) => {
    if (editTask) {
      setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
    } else {
      setTasks([...tasks, { ...updatedTask, id: tasks.length + 1 }]);
    }
    setIsEditing(false);
    setEditTask(null);
  };

  const handleConfirmDelete = () => {
    setTasks(tasks.filter(task => task.id !== deleteTask.id));
    setIsDeleting(false);
    setDeleteTask(null);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl text-white mb-4">Task List</h2>
        <button onClick={() => setIsEditing(true)} className="bg-blue-600 text-white px-4 py-2 rounded">
          Create Task
        </button>
      </div>
      <div className="bg-gray-800 p-4 rounded shadow-md">
        <div className="grid grid-cols-5 text-white mb-4">
          <div className="font-semibold">Task Name</div>
          <div className="font-semibold">Due Date</div>
          <div className="font-semibold">Priority</div>
          <div className="font-semibold">Status</div>
          <div className="font-semibold">Actions</div>
        </div>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} onEdit={handleEdit} onDelete={handleDelete} />
        ))}
      </div>
      {isEditing && <TaskForm task={editTask} onSave={handleSaveTask} onCancel={() => setIsEditing(false)} />}
      {isDeleting && <DeleteTaskModal task={deleteTask} onConfirm={handleConfirmDelete} onCancel={() => setIsDeleting(false)} />}
    </div>
  );
};

export default TaskList;
