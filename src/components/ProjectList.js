import React from 'react';

const ProjectList = ({ projects, onView, onEdit, onDelete }) => {
  return (
    <div className="space-y-4">
      {projects.map(project => (
        <div key={project.id} className="bg-gray-100 p-4 rounded-lg shadow-md dark:bg-gray-800">
          <h2 className="text-xl font-bold">{project.name}</h2>
          <p>{project.description}</p>
          <button onClick={() => onView(project)} className="bg-green-500 text-white px-2 py-1 rounded mr-2 dark:bg-green-600">
            View Tasks
          </button>
          <button onClick={() => onEdit(project)} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 dark:bg-yellow-600">
            Edit
          </button>
          <button onClick={() => onDelete(project.id)} className="bg-red-500 text-white px-2 py-1 rounded dark:bg-red-600">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
