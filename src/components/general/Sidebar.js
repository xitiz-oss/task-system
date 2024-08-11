import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LuHome, LuChevronRight, LuChevronLeft } from 'react-icons/lu';
import { FaBook } from 'react-icons/fa';
import { PiExamFill } from 'react-icons/pi';
import { RiGraduationCapLine, RiTodoLine } from 'react-icons/ri';
import { IoDocumentTextOutline, IoTime, IoLogOutOutline, IoCloseOutline, IoMenuOutline } from 'react-icons/io5';
import { IoMdSettings } from 'react-icons/io';
import clsx from 'clsx';
import '../../styles/sidebar.css';

const SIDEBAR_ITEMS = [
  { id: 'dashboard', title: 'Dashboard', icon: LuHome, link: 'student/dashboard' },
  { id: 'readingMaterial', title: 'Reading Material', icon: FaBook, link: 'student/readingMaterial' },
  { id: 'pastPaper', title: 'Past Paper', icon: IoDocumentTextOutline, link: 'student/pastPaper' },
  { id: 'assignments', title: 'Assignments', icon: PiExamFill, link: '/student/assignment' },
  { id: 'result', title: 'Result', icon: RiGraduationCapLine, link: 'student/result' },
  { id: 'timeTable', title: 'Time Table', icon: IoTime, link: 'student/timeTable'},
  { id: 'todoList', title: 'To-Do List', icon: RiTodoLine, link: '/student/toDoList' },
];

const OTHER_ITEMS = [
  { id: 'settings', title: 'Settings', icon: IoMdSettings, link: 'student/settings' },
  { id: 'logOut', title: 'Logout', icon: IoLogOutOutline, link: 'student/logout' },
];

function Sidebar() {
  let { activeId } = useParams();

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isCollapsedMobile, setIsCollapsedMobile] = useState(true);
  const [activeTab, setActiveTab] = useState(activeId || 'dashboard');
  const [hoverTab, setHoverTab] = useState(SIDEBAR_ITEMS[0].id);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleSidebar = () => {
    setIsCollapsedMobile(!isCollapsedMobile);
  };

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth <= 1024;
      setIsMobile(isMobileView);
      if (!isMobileView) {
        setIsCollapsedMobile(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setActiveTab(activeId || 'dashboard');
  }, [activeId]);

  return (
    <>
      <button
        onClick={handleToggleDarkMode}
        className="dark-mode-toggle"
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      {isMobile ? (
        <motion.div
          className={clsx("sidebar max-h-screen overflow-y-scroll overflow-x-visible border-r font-poppins", {
            'dark-mode': isDarkMode,
          })}
          animate={{ width: isCollapsedMobile ? 80 : 280 }}
          layout
        >
          <button
            onClick={handleToggleSidebar}
            className={`text-3xl ${!isCollapsedMobile ? 'ml-auto' : 'mx-auto'}`}
          >
            {!isCollapsedMobile ? <IoCloseOutline /> : <IoMenuOutline />}
          </button>

          {!isCollapsedMobile ? (
            <>
              <h1
                className={`transition-all duration-300 ease-in-out rounded-2xl object-contain ${
                  isCollapsedMobile ? 'h-16 ' : 'h-[16vh] px-4 '
                }`}
              >
                Task
              </h1>
              <hr className={`${isCollapsed ? 'my-2 ' : 'my-[24px] '}`} />

              {SIDEBAR_ITEMS.map((item) => (
                <Link to={`${item.link}`} key={item.id} className="pb-2">
                  <SidebarItem
                    isSidebarCollapsed={isCollapsed}
                    item={item}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    hoverTab={hoverTab}
                    setHoverTab={setHoverTab}
                    isDarkMode={isDarkMode}
                  />
                </Link>
              ))}
              <hr className={`${isCollapsed ? 'my-2 ' : 'my-[14px] '}`} />
              {OTHER_ITEMS.map((item) => (
                <Link to={`${item.link}`} key={item.id} className="pb-2">
                  <SidebarItem
                    isSidebarCollapsed={isCollapsed}
                    item={item}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    hoverTab={hoverTab}
                    setHoverTab={setHoverTab}
                    isDarkMode={isDarkMode}
                  />
                </Link>
              ))}
            </>
          ) : <div className='min-h-screen'></div>}
        </motion.div>
      ) : (
        <motion.div
          className={clsx("sidebar h-screen overflow-x-auto overflow-y-scroll border-r font-poppins", {
            'dark-mode': isDarkMode,
          })}
          animate={{ width: isCollapsed ? 80 : 280 }}
          layout
        >
          <h1
            className={`transition-all duration-300 ease-in-out rounded-2xl object-contain ${
              isCollapsedMobile ? 'h-16 ' : 'h-[16vh] px-4 '
            }`}
          >
            Task
          </h1>
          <hr className={`${isCollapsed ? 'my-2 ' : 'my-[24px] '}`} />
          <button
            className="sidebar__collapse-button"
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
                isDarkMode={isDarkMode}
              />
            </Link>
          ))}
          <hr className={`${isCollapsed ? 'my-2 ' : 'my-[14px] '}`} />
          {OTHER_ITEMS.map((item) => (
            <Link to={`${item.link}`} key={item.id} className="pb-2">
              <SidebarItem
                isSidebarCollapsed={isCollapsed}
                item={item}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                hoverTab={hoverTab}
                setHoverTab={setHoverTab}
                isDarkMode={isDarkMode}
              />
            </Link>
          ))}
        </motion.div>
      )}
    </>
  );
}

function SidebarItem({ item, hoverTab, setHoverTab, activeTab, setActiveTab, isSidebarCollapsed, isDarkMode }) {
  const IconComponent = item.icon;

  return (
    <motion.div
      layout
      className={clsx('sidebar-item', {
        'sidebar-item__active': activeTab === item.id,
        'dark-mode': isDarkMode,
      })}
      onFocus={() => setHoverTab(item.id)}
      onMouseOver={() => setHoverTab(item.id)}
      onMouseLeave={() => setHoverTab(item.id)}
      onClick={() => setActiveTab(item.id)}
    >
      {hoverTab === item.id ? (
        <motion.div
          layoutId="sidebar-item-indicator"
          className={clsx('sidebar-item__active-bg', {
            'dark-mode': isDarkMode,
          })}
        />
      ) : null}
      <span
        className={clsx('sidebar-item__icon', {
          'dark-mode': isDarkMode,
          'text-xl': isSidebarCollapsed,
          'text-lg': !isSidebarCollapsed,
        })}
      >
        <IconComponent />
      </span>
      <motion.span
        className={clsx('sidebar-item__title', {
          'dark-mode': isDarkMode,
        })}
        animate={{
          clipPath: isSidebarCollapsed
            ? 'inset(0% 100% 0% 0%)'
            : 'inset(0% 0% 0% 0%)',
          opacity: isSidebarCollapsed ? 0 : 1,
        }}
      >
        {item.title}
      </motion.span>
    </motion.div>
  );
}

export default Sidebar;
