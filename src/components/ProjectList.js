import React from 'react';

const ProjectList = ({ projects, onDeleteProject, onEditProject }) => {
  return (
    <ul className="space-y-4">
      {projects.map((project) => (
        <li
          key={project.id}
          className="border p-4 rounded flex justify-between items-center"
        >
          <div>
            <h2 className="text-xl font-bold">{project.name}</h2>
            <p>{project.description}</p>
          </div>
          <div>
            <button
              onClick={() => onEditProject(project.id)}
              className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => onDeleteProject(project.id)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
