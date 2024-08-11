import { useState } from "react";
import {
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import HomePage from "../pages/HomePage";
import Sidebar from "../components/general/Sidebar";
import Tasks from "../pages/Tasks";



import { MotionConfig } from "framer-motion";


const BELayout = ({ isOpen, setIsOpen }) => {
  return (
    <MotionConfig transition={{ type: "spring", bounce: 0, duration: 0.4 }}>
      <div className="relative lg:flex h-[100vh]">
        <div className="absolute left-0 top-0 z-20 lg:relative ">
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        <main
          className={`transition-all duration-300 ease-in-out flex-1 ml-[80px] lg:ml-0 h-screen overflow-y-auto`}
        >
          <Outlet />
        </main>
      </div>
    </MotionConfig>
  );
};

const Routing = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<BELayout isOpen={isOpen} setIsOpen={setIsOpen} />}
        >
          <Route index element={<HomePage />} />

          <Route path="/tasks" element={<Tasks />} />

        </Route>

        {/* <Route path="*" element={<Error />} /> */}

      </Routes>
    </Router>
  );
};



export default Routing;
