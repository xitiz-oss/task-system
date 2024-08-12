// components/ProjectList.js
import React from 'react';

const ProjectList = ({ projects, onUpdateProject, onDeleteProject }) => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">Project List</h2>
      <ul className="bg-white dark:bg-gray-700 rounded-lg shadow-md">
        {projects.map((project) => (
          <li key={project.id} className="flex justify-between items-center p-4 border-b dark:border-gray-600">
            <div>
              <h3 className="text-lg font-bold">{project.name}</h3>
              <p className="text-sm">{project.description}</p>
            </div>
            <div className="flex space-x-2">
              <button onClick={() => onUpdateProject(project)} className="text-blue-500 hover:underline">Edit</button>
              <button onClick={() => onDeleteProject(project.id)} className="text-red-500 hover:underline">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;