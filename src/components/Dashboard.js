import { motion } from 'framer-motion';

const Dashboard = ({ tasks }) => {
  const taskStatus = {
    todo: tasks.filter(task => task.status === 'To Do').length,
    inProgress: tasks.filter(task => task.status === 'In Progress').length,
    completed: tasks.filter(task => task.status === 'Completed').length,
  };

  return (
    <div className="p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <div className="mt-4 grid grid-cols-3 gap-4">
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="text-lg">To Do</h3>
            <p className="text-2xl">{taskStatus.todo}</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg">
            <h3 className="text-lg">In Progress</h3>
            <p className="text-2xl">{taskStatus.inProgress}</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="text-lg">Completed</h3>
            <p className="text-2xl">{taskStatus.completed}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
