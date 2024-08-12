import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ProjectForm from '../components/ProjectForm';
import ProjectList from '../components/ProjectList';
import { motion } from 'framer-motion';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);

  const handleCreateProject = (project) => {
    setProjects([...projects, { ...project, id: Date.now() }]);
  };

  const handleEditProject = (project) => {
    setEditingProject(project);
  };

  const handleUpdateProject = (updatedProject) => {
    setProjects(projects.map(project => project.id === updatedProject.id ? updatedProject : project));
    setEditingProject(null);
  };

  const handleDeleteProject = (id) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="p-6 flex-1">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold mb-4">Projects</h1>
          <ProjectForm
            onSubmit={editingProject ? handleUpdateProject : handleCreateProject}
            initialProject={editingProject}
          />
          <ProjectList
            projects={projects}
            onView={(project) => console.log(`Viewing tasks for project ${project.name}`)}
            onEdit={handleEditProject}
            onDelete={handleDeleteProject}
          />
        </motion.div>
      </main>
    </div>
  );
};

export default Projects;
