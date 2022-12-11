import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { Link } from "react-scroll";
import HamburgerIcon from "../../assets/images/icons/HamburgerIcon";
const Items = [
  {
    title: "ABOUT",
    linkTo: "about",
  },
  {
    title: "EDUCATION",
    linkTo: "education",
  },
  {
    title: "SKILLS",
    linkTo: "skills",
  },
  {
    title: "PROJECTS",
    linkTo: "projects",
  },
  {
    title: "CONTACT",
    linkTo: "contact",
  },
];

const Navbar = (props) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [onTop, setOnTop] = useState(true);
  const headerClass = () => {
    if (window.pageYOffset !== 0) {
      setOnTop(false);
    } else {
      setOnTop(true);
    }
  };

  useEffect(() => {
    headerClass();
    window.onscroll = function () {
      headerClass();
    };
  }, []);

  return (
    <nav className={`navbar ${onTop === false ? "navbar--fixed" : ""}`}>
      <div className="nav-container">
        <h1 className="nav-logo">HAITHEM</h1>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <HamburgerIcon />
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          {Items.map((item) => (
            <Link
              key={item.title}
              className="link"
              activeClass="active"
              to={item.linkTo}
              spy={true}
              smooth={true}
              offset={0}
              duration={750}
              onClick={() => {
                setIsNavExpanded(false);
              }}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
