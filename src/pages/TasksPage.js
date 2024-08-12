import React from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const TasksPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Tasks</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default TasksPage;
