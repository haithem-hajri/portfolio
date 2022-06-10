import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { Link } from "react-scroll";
const Navbar = (props) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  //( !arrayPaths.includes(router.pathname) || isErrorPage ) ? false :
  const [onTop, setOnTop] = useState(true);
  const headerClass = () => {
    if (window.pageYOffset === 0) {
      setOnTop(true);
    } else {
      setOnTop(false);
    }
  };

  useEffect(() => {
    /* if(!arrayPaths.includes(router.pathname) || isErrorPage) {
      return;
    }*/

    headerClass();
    window.onscroll = function () {
      headerClass();
    };
  }, []);

  return (
    <div className={`navbar ${onTop === false ? "navbar--fixed" : ""}`}>
      <h1 className="navbar-logo">HAITHEM</h1>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <Link
              className="link"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={750}
              onClick={() => {
                setIsNavExpanded(false);
              }}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              className="link"
              activeClass="active"
              to="education"
              spy={true}
              smooth={true}
              offset={0}
              duration={750}
              onClick={() => {
                setIsNavExpanded(false);
              }}
            >
              EDUCATION
            </Link>
          </li>
          <li>
            <Link
              className="link"
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={0}
              duration={750}
              onClick={() => {
                setIsNavExpanded(false);
              }}
            >
              SKILLS
            </Link>
          </li>
          <li>
            <Link
              className="link"
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={750}
              onClick={() => {
                setIsNavExpanded(false);
              }}
            >
              PROJECTS
            </Link>
          </li>

          <li>
            <Link
              className="link"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={750}
              onClick={() => {
                setIsNavExpanded(false);
              }}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
