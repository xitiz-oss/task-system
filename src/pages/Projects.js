// pages/Projects.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CreateProject from '../components/CreateProject';
import ProjectList from '../components/ProjectList';

const initialProjects = [
  { id: 1, name: 'Project 1', description: 'Description for Project 1' },
  { id: 2, name: 'Project 2', description: 'Description for Project 2' },
];

function Projects() {
  const [projects, setProjects] = useState(initialProjects);

  const handleCreateProject = (project) => {
    const newProject = { id: projects.length + 1, ...project }; // Simple ID assignment
    setProjects([...projects, newProject]);
  };

  const handleUpdateProject = (updatedProject) => {
    setProjects(projects.map((project) => (project.id === updatedProject.id ? updatedProject : project)));
  };

  const handleDeleteProject = (projectId) => {
    setProjects(projects.filter((project) => project.id !== projectId));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-8"
    >
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <CreateProject onCreateProject={handleCreateProject} />
      <ProjectList
        projects={projects}
        onUpdateProject={handleUpdateProject}
        onDeleteProject={handleDeleteProject}
      />
    </motion.div>
  );
}

export default Projects;