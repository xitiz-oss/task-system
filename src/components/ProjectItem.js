import React from 'react';

const ProjectItem = ({ project, onEdit, onDelete }) => {
  return (
    <div className="bg-gray-100 p-4 mb-2 rounded shadow-md">
      <h3 className="text-lg font-bold">{project.name}</h3>
      <p>{project.description}</p>
      <button onClick={() => onEdit(project)} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Edit</button>
      <button onClick={() => onDelete(project.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
    </div>
  );
};

export default ProjectItem;
