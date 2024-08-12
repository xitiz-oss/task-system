import React from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from '../components/ThemeToggle';

function Settings() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-8"
    >
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <ThemeToggle />
    </motion.div>
  );
}

export default Settings;