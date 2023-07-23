import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function NavBar() {
  const [activeLink, setActiveLink] = useState("/");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (to) => {
    setActiveLink(to);
    setMenuOpen(false);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='flex gap-8 justify-end w-full px-6 lg:p-12 lg:pr-24 '>
      <div className='container mx-auto px-4 md:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='mr-auto text-brightRed font-bold cursor-pointer'>
            MONARCHY
          </div>
          {/* Hamburger menu icon */}
          <div className='md:hidden'>
            <button
              onClick={handleMenuToggle}
              className='flex items-center px-3 ml-3 -mr-3 py-2 border rounded text-brightRed border-brightRed hover:text-white hover:bg-brightRed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-brightRed'
            >
              <svg
                className='h-4 w-4 fill-current'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Menu</title>
                {menuOpen ? (
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M4 5h12a1 1 0 010 2H4a1 1 0 010-2zm0 5h12a1 1 0 010 2H4a1 1 0 010-2zm0 5h12a1 1 0 010 2H4a1 1 0 010-2z'
                  />
                ) : (
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M2 4.267a1 1 0 011.243-.97l14 4A1 1 0 0118 9.333v1.334a1 1 0 01-.757.97l-14 4A1 1 0 012 15.733V4.267zm15 5.466l-14-4v6.534l14 4V9.733z'
                  />
                )}
              </svg>
            </button>
          </div>
          {/* Desktop navigation */}
          <div className={`hidden md:flex md:space-x-8 items-center`}>
            <Link
              className={`nav-links ${activeLink === "/" ? "active-link" : ""}`}
              to='/'
              onClick={() => handleLinkClick("/")}
            >
              Home
            </Link>
            <Link
              className={`nav-links ${
                activeLink === "/Portfolio" ? "active-link" : ""
              }`}
              to='/Portfolio'
              onClick={() => handleLinkClick("/Portfolio")}
            >
              Portfolio
            </Link>
            <Link
              className={`nav-links ${
                activeLink === "/About" ? "active-link" : ""
              }`}
              to='/About'
              onClick={() => handleLinkClick("/About")}
            >
              About
            </Link>
            <Link
              className={`nav-links ${
                activeLink === "/Service" ? "active-link" : ""
              }`}
              to='/Service'
              onClick={() => handleLinkClick("/Service")}
            >
              Services
            </Link>
            <Link
              className={`nav-links ${
                activeLink === "/Blog" ? "active-link" : ""
              }`}
              to='/Blog'
              onClick={() => handleLinkClick("/Blog")}
            >
              Blog
            </Link>
            <Link
              className={`nav-links ${
                activeLink === "/Contact" ? "active-link" : ""
              }`}
              to='/Contact'
              onClick={() => handleLinkClick("/Contact")}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className='md:hidden ml-1 px-12 relative mx-0 bg-white'>
          <div className='px-2 w-48 py-4 space-y-1'>
            <Link
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                activeLink === "/" ? "active-link-sm" : ""
              }`}
              to='/'
              onClick={() => handleLinkClick("/")}
            >
              Home
            </Link>
            <Link
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                activeLink === "/Portfolio" ? "active-link-sm" : ""
              }`}
              to='/Portfolio'
              onClick={() => handleLinkClick("/Portfolio")}
            >
              Portfolio
            </Link>
            <Link
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                activeLink === "/About" ? "active-link-sm" : ""
              }`}
              to='/About'
              onClick={() => handleLinkClick("/About")}
            >
              About
            </Link>
            <Link
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                activeLink === "/Service" ? "active-link-sm" : ""
              }`}
              to='/Service'
              onClick={() => handleLinkClick("/Service")}
            >
              Services
            </Link>
            <Link
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                activeLink === "/Blog" ? "active-link-sm" : ""
              }`}
              to='/Blog'
              onClick={() => handleLinkClick("/Blog")}
            >
              Blog
            </Link>
            <Link
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                activeLink === "/Contact" ? "active-link-sm" : ""
              }`}
              to='/Contact'
              onClick={() => handleLinkClick("/Contact")}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
