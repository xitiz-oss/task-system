import React, { useState } from "react";
import TaskList from "../components/tasks/TaskList";
import TaskForm from "../components/tasks/TaskForm";

import { TaskContext } from "../utils/TaskContext";

const Tasks = () => {
  const initialTasks = [
    {
      id: 1,
      name: "Task 1",
      description: "Description 1",
      dueDate: "2024-08-15",
      priority: "High",
      status: "To Do",
    },
    {
      id: 2,
      name: "Task 2",
      description: "Description 2",
      dueDate: "2024-08-16",
      priority: "Medium",
      status: "In Progress",
    },
    // Add more tasks as needed
  ];

  const [tasks, setTasks] = useState(initialTasks);
  return (
    <div className="max-w-screen-2xl mx-auto p-10">
      <TaskContext.Provider value={{ tasks, setTasks }}>
        <div className="grid grid-cols-[65%_0.1%_34%]">
          <TaskList></TaskList>
          <div className="w-full h-screen bg-gray-300"></div>
          <TaskForm />
        </div>
      </TaskContext.Provider>
    </div>
  );
};

export default Tasks;
