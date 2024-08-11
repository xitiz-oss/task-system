import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LuHome, LuChevronRight, LuChevronLeft } from "react-icons/lu";
import { FaBook } from "react-icons/fa";
import { PiExamFill } from "react-icons/pi";
import { RiGraduationCapLine, RiTodoLine } from "react-icons/ri";
import {
  IoDocumentTextOutline,
  IoTime,
  IoLogOutOutline,
  IoCloseOutline,
  IoMenuOutline,
} from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import clsx from "clsx";
import "../../styles/sidebar.css";

const SIDEBAR_ITEMS = [
  {
    id: "dashboard",
    title: "Dashboard",
    icon: LuHome,
    link: "/dashboard",
  },
  {
    id: "tasks",
    title: "Tasks",
    icon: FaBook,
    link: "/tasks",
  },
  {
    id: "projects",
    title: "Projects",
    icon: IoDocumentTextOutline,
    link: "/projects",
  },

];

const OTHER_ITEMS = [
  {
    id: "settings",
    title: "Settings",
    icon: IoMdSettings,
    link: "student/settings",
  },
  {
    id: "logOut",
    title: "Logout",
    icon: IoLogOutOutline,
    link: "student/logout",
  },
];

function Sidebar() {
  let { activeId } = useParams();

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isCollapsedMobile, setIsCollapsedMobile] = useState(true);
  const [activeTab, setActiveTab] = useState(activeId || "dashboard");
  const [hoverTab, setHoverTab] = useState(SIDEBAR_ITEMS[0].id);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  const handleToggleSidebar = () => {
    setIsCollapsedMobile(!isCollapsedMobile);
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth <= 1024;
      setIsMobile(isMobileView);
      if (!isMobileView) {
        setIsCollapsedMobile(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setActiveTab(activeId || "dashboard");
  }, [activeId]);

  return (
    <>
      {isMobile ? (
        <motion.div
          className={clsx(
            "sidebar max-h-screen overflow-y-scroll overflow-x-visible border-r font-poppins dark-mode"
          )}
          animate={{ width: isCollapsedMobile ? 80 : 280 }}
          layout
        >
          <button
            onClick={handleToggleSidebar}
            className={`text-3xl ${!isCollapsedMobile ? "ml-auto" : "mx-auto"}`}
          >
            {!isCollapsedMobile ? <IoCloseOutline /> : <IoMenuOutline />}
          </button>

          {!isCollapsedMobile ? (
            <>
              <h1
                className={`transition-all duration-300 ease-in-out rounded-2xl object-contain ${
                  isCollapsedMobile ? "h-16 " : "h-[16vh] px-4 "
                }`}
              >
                <span className="text-[30px]">TMS</span>
              </h1>
              <hr className={`${isCollapsed ? "my-2 " : "my-[24px] "}`} />

              {SIDEBAR_ITEMS.map((item) => (
                <Link to={`${item.link}`} key={item.id} className="pb-2">
                  <SidebarItem
                    isSidebarCollapsed={isCollapsed}
                    item={item}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    hoverTab={hoverTab}
                    setHoverTab={setHoverTab}
                  />
                </Link>
              ))}
              <hr className={`${isCollapsed ? "my-2 " : "my-[14px] "}`} />
              {OTHER_ITEMS.map((item) => (
                <Link to={`${item.link}`} key={item.id} className="pb-2">
                  <SidebarItem
                    isSidebarCollapsed={isCollapsed}
                    item={item}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    hoverTab={hoverTab}
                    setHoverTab={setHoverTab}
                  />
                </Link>
              ))}
            </>
          ) : (
            <div className="min-h-screen"></div>
          )}
        </motion.div>
      ) : (
        <motion.div
          className={clsx(
            "sidebar h-screen overflow-x-auto overflow-y-scroll border-r font-poppins dark-mode"
          )}
          animate={{ width: isCollapsed ? 80 : 280 }}
          layout
        >
          <h1
            className={`transition-all duration-300 ease-in-out rounded-2xl object-contain ${
              isCollapsedMobile ? "h-12 " : "h-[16vh] px-4 "
            }`}
          >
            {isCollapsed ? (
              <span className="text-[20px]">TMS</span>
            ) : (
              <>
                <span className="text-[30px]">TASK</span>
                <br /> MANAGEMENT SYSTEM
              </>
            )}
          </h1>
          <hr className={`${isCollapsed ? "my-2 " : "my-[24px] "}`} />
          <button
            className="sidebar__collapse-button dark-mode"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? <LuChevronRight /> : <LuChevronLeft />}
          </button>
          {SIDEBAR_ITEMS.map((item) => (
            <Link to={`${item.link}`} key={item.id} className="pb-2">
              <SidebarItem
                isSidebarCollapsed={isCollapsed}
                item={item}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                hoverTab={hoverTab}
                setHoverTab={setHoverTab}
              />
            </Link>
          ))}
          <hr className={`${isCollapsed ? "my-2 " : "my-[14px] "}`} />
          {OTHER_ITEMS.map((item) => (
            <Link to={`${item.link}`} key={item.id} className="pb-2">
              <SidebarItem
                isSidebarCollapsed={isCollapsed}
                item={item}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                hoverTab={hoverTab}
                setHoverTab={setHoverTab}
              />
            </Link>
          ))}
        </motion.div>
      )}
    </>
  );
}

function SidebarItem({
  item,
  hoverTab,
  setHoverTab,
  activeTab,
  setActiveTab,
  isSidebarCollapsed,
}) {
  const IconComponent = item.icon;

  return (
    <motion.div
      layout
      className={clsx("sidebar-item dark-mode", {
        "sidebar-item__active": activeTab === item.id,
      })}
      onFocus={() => setHoverTab(item.id)}
      onMouseOver={() => setHoverTab(item.id)}
      onMouseLeave={() => setHoverTab(item.id)}
      onClick={() => setActiveTab(item.id)}
    >
      {hoverTab === item.id ? (
        <motion.div
          layoutId="sidebar-item-indicator"
          className={clsx("sidebar-item__active-bg dark-mode")}
        />
      ) : null}
      <span
        className={clsx("sidebar-item__icon dark-mode", {
          "text-xl": isSidebarCollapsed,
          "text-lg": !isSidebarCollapsed,
        })}
      >
        <IconComponent />
      </span>
      <motion.span
        className={clsx("sidebar-item__title dark-mode")}
        animate={{
          clipPath: isSidebarCollapsed
            ? "inset(0% 100% 0% 0%)"
            : "inset(0% 0% 0% 0%)",
          opacity: isSidebarCollapsed ? 0 : 1,
        }}
      >
        {item.title}
      </motion.span>
    </motion.div>
  );
}

export default Sidebar;
