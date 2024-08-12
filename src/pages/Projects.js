// pages/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import CreateProject from '../components/CreateProject';
import ProjectList from '../components/ProjectList';

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-8"
    >
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <CreateProject />
      <ProjectList />
    </motion.div>
  );
}

export default Projects;