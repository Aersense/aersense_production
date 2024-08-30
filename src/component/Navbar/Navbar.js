import React, { useState } from 'react';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black p-4 flex items-center justify-between z-50">
      <div className="text-white text-3xl font-light italic logo">
        Aersense<span className="text-red-600 ">™</span>
      </div>
      <div className="hidden md:flex flex-1 justify-center space-x-16">
        <a href="" className="navlink text-white text-sm">
          mataer 1
        </a>
        <a href="" className=" navlink text-white text-sm">
        aer os
        </a>
        <a href="#research" className="text-white navlink text-sm">
          research
        </a>
        <a href="#newsroom" className="text-white navlink text-sm">
          newsroom
        </a>
        <a href="#support" className="text-white navlink text-sm">
          support
        </a>
      </div>
      <button className="text-white md:hidden" onClick={toggleSidebar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h18M3 12h18M3 21h18"
          />
        </svg>
      </button>
      {isSidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-75 md:hidden"
            onClick={closeSidebar}
          ></div>
          <div className="fixed inset-0 flex flex-col items-center justify-center space-y-8 md:hidden">
            <a href="" className="text-white navlink text-lg" onClick={closeSidebar}>
              mataer 1
            </a>
            <a href="" className="text-white navlink text-lg" onClick={closeSidebar}>
              aer os
            </a>
            <a href="#research" className="text-white navlink text-lg" onClick={closeSidebar}>
              research
            </a>
            <a href="#newsroom" className="text-white navlink text-lg" onClick={closeSidebar}>
              newsroom
            </a>
            <a href="#support" className="text-white navlink text-lg" onClick={closeSidebar}>
              support
            </a>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;