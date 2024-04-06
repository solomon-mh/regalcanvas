import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNavicon, faTimes } from "@fortawesome/free-solid-svg-icons";

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
    <nav
      id='nav-bar'
      className='flex md:static gap-0 md:gap-12 justify-between sm:justify-end w-full px-6 pr-0 lg:p-12  lg:pr-24 z-50'
    >
      <div className='container mx-auto px-4 md:px-8'>
        <div className='flex justify-between -ml-4 items-center h-16'>
          <div className='mr-auto  text-brightRed font-bold cursor-pointer'>
            MONARCHY
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
      {/* Hamburger menu icon */}
      <div className='md:hidden'>
        <button
          onClick={handleMenuToggle}
          className='flex items-center fixed top-0 right-2 z-50 px-3 mt-2 py-2 border rounded text-brightRed hover:text-white hover:bg-brightRed focus:outline-none '
        >
          {menuOpen ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faNavicon} />
          )}
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div
          className={`md:hidden fixed right-0 bg-white mx-0 px-2 py-4 transition-all duration-700 ${
            menuOpen ? "w-64" : "w-0"
          } h-full`}
        >
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
            } h-full`}
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
      )}
    </nav>
  );
}
