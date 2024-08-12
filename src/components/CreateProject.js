// components/CreateProject.js
import React, { useState } from 'react';

const CreateProject = ({ onCreateProject }) => {
  const [project, setProject] = useState({ name: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateProject(project);
    setProject({ name: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 mb-4">
      <h2 className="text-xl font-bold">Create Project</h2>
      <input type="text" name="name" placeholder="Project Name" value={project.name} onChange={handleChange} required className="block w-full p-2 border mb-2" />
      <textarea name="description" placeholder="Description" value={project.description} onChange={handleChange} className="block w-full p-2 border mb-2" />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Project</button>
    </form>
  );
};

export default CreateProject;