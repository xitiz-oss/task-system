import React from 'react';
import ProjectForm from '../components/ProjectForm';
import ProjectList from '../components/ProjectList';

const ProjectsPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <ProjectForm />
      <ProjectList />
    </div>
  );
};

export default ProjectsPage;
