import React, { useState } from 'react';

const ProjectForm = ({ onSubmit, initialProject = {} }) => {
  const [project, setProject] = useState(initialProject);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(project);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        value={project.name || ''}
        onChange={handleChange}
        placeholder="Project Name"
        className="w-full p-2 border border-gray-300 rounded dark:border-gray-600 dark:bg-gray-800 dark:text-white"
      />
      <textarea
        name="description"
        value={project.description || ''}
        onChange={handleChange}
        placeholder="Project Description"
        className="w-full p-2 border border-gray-300 rounded dark:border-gray-600 dark:bg-gray-800 dark:text-white"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded dark:bg-blue-700 dark:text-gray-200">
        Save Project
      </button>
    </form>
  );
};

export default ProjectForm;
