import React, { useState } from 'react';

const ProjectForm = ({ onAddProject }) => {
  const [project, setProject] = useState({
    name: '',
    description: '',
  });

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProject(project);
    setProject({ name: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="grid grid-cols-1 gap-4 mb-4">
        <input
          type="text"
          name="name"
          value={project.name}
          onChange={handleChange}
          placeholder="Project Name"
          className="border p-2 rounded"
        />
        <textarea
          name="description"
          value={project.description}
          onChange={handleChange}
          placeholder="Project Description"
          className="border p-2 rounded"
        ></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Project
      </button>
    </form>
  );
};

export default ProjectForm;
