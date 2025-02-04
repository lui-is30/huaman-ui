import React, { useState } from "react";
import { Link } from "react-router-dom";

const HeaderGlobal=()=>{

    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    return(<>
            <nav className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-lg font-bold">
          <Link to="/">Logo</Link>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-white hover:text-gray-200"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Links (Desktop) */}
        <div className="hidden md:flex md:items-center md:space-x-6">
        <a href="#" className="block py-2 px-4 hover:bg-blue-500 rounded">
            Get Started
          </a>
          <Link to="/button" >
              Button
            </Link>
            <Link to="/footer" >
              Footer
            </Link>
            <Link to="/header" >
              Header
            </Link>
            <Link to="/form" >
              Form
            </Link>
            <Link to="/grid" >
              Grid
            </Link>
            <Link to="/searchBar" >
              Search Bar
            </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full bg-blue-600 text-white z-10 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            {/* Logo */}
            <div className="text-lg font-bold">
              <a href="#">Logo</a>
            </div>

            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="focus:outline-none text-white hover:text-gray-200"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex flex-col items-start px-4 space-y-4 pb-4">
            <a href="#" className="block py-2 px-4 hover:bg-blue-500 rounded">
              Home
            </a>
            <a href="#" className="block py-2 px-4 hover:bg-blue-500 rounded">
              About
            </a>
            <a href="#" className="block py-2 px-4 hover:bg-blue-500 rounded">
              Services
            </a>
            <a href="#" className="block py-2 px-4 hover:bg-blue-500 rounded">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
    </>)
}


export default HeaderGlobal;