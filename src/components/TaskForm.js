import { useState } from 'react';

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return { value, onChange: handleChange };
};

const TaskForm = ({ onSave, task }) => {
  const name = useFormInput(task ? task.name : '');
  const description = useFormInput(task ? task.description : '');
  const dueDate = useFormInput(task ? task.dueDate : '');
  const priority = useFormInput(task ? task.priority : 'Low');
  const status = useFormInput(task ? task.status : 'To Do');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      name: name.value,
      description: description.value,
      dueDate: dueDate.value,
      priority: priority.value,
      status: status.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow">
      <div className="mb-4">
        <label className="block mb-1">Task Name</label>
        <input {...name} className="w-full p-2 border rounded" required />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Description</label>
        <textarea {...description} className="w-full p-2 border rounded"></textarea>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Due Date</label>
        <input type="date" {...dueDate} className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Priority</label>
        <select {...priority} className="w-full p-2 border rounded">
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Status</label>
        <select {...status} className="w-full p-2 border rounded">
          <option>To Do</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        Save Task
      </button>
    </form>
  );
};

export default TaskForm;
