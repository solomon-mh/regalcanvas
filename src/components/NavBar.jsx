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
          className={`z-30 md:hidden fixed right-0 bg-white  mx-0 px-2 py-4 ${
            menuOpen ? "w-[230px] h-[600px]" : "w-0 h-0"
          }`}
        >
          <Link
            className={`nav_links ${
              activeLink === "/" ? "active-link-sm" : ""
            }`}
            to='/'
            onClick={() => handleLinkClick("/")}
          >
            Home
          </Link>
          <Link
            className={`nav_links ${
              activeLink === "/Portfolio" ? "active-link-sm" : ""
            }`}
            to='/Portfolio'
            onClick={() => handleLinkClick("/Portfolio")}
          >
            Portfolio
          </Link>
          <Link
            className={`nav_links ${
              activeLink === "/About" ? "active-link-sm" : ""
            }`}
            to='/About'
            onClick={() => handleLinkClick("/About")}
          >
            About
          </Link>
          <Link
            className={`nav_links ${
              activeLink === "/Service" ? "active-link-sm" : ""
            }`}
            to='/Service'
            onClick={() => handleLinkClick("/Service")}
          >
            Services
          </Link>
          <Link
            className={`nav_links ${
              activeLink === "/Blog" ? "active-link-sm" : ""
            }`}
            to='/Blog'
            onClick={() => handleLinkClick("/Blog")}
          >
            Blog
          </Link>
          <Link
            className={`nav_links ${
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
