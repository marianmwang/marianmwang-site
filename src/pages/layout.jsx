import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, animateScroll as scroll } from "react-scroll";
import {
  faPaperPlane,
  faFile,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "../pages/styles.css";

const Layout = ({ children }) => {
  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 1000 });
  };

  function collapseNavbar() {
    var navLinks = document.getElementById("collapse-items");
    var navIcon = document.getElementById("collapse-navbar");
    if (navLinks.style.display === "none") {
      navLinks.style.display = "inline";
      navIcon.style.transform = "rotate(180deg)";
      navIcon.style.transition = "transform 0.5s";
    } else {
      navLinks.style.display = "none";
      navIcon.style.transform = "rotate(0deg)";
    }
  }

  return (
    <div className="centered">
      <div className="sidenav">
        <div className="sidenav-section">
          <h1>
            <button className="button-no-style" onClick={scrollToTop}>
              marian<br></br>wang
            </button>
          </h1>
        </div>
        <div className="sidenav-section">
          <ul className="inline-list">
            <li>
              <a
                href="https://drive.google.com/file/d/1RyUoUS1dxxd8SvV8xkZ0FKMLNhwFXgW4/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFile} />
              </a>
            </li>
            <li>
              <a href="mailto:marian.mian.wang@gmail.com">
                <FontAwesomeIcon icon={faPaperPlane} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/marianmwang"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <button
                id="collapse-navbar"
                className="button-no-style"
                onClick={collapseNavbar}
              >
                <FontAwesomeIcon icon={faChevronDown} />
              </button>
            </li>
          </ul>
        </div>
        <div className="sidenav-section" id="collapse-items">
          <ul>
            <li>
              <Link
                className="sidenav-link"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <button className="button-no-style">about me</button>
              </Link>
            </li>
            <li>
              <Link
                className="sidenav-link"
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <button className="button-no-style">projects</button>
              </Link>
            </li>
            <li>
              <Link
                className="sidenav-link"
                activeClass="active"
                to="gallery"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <button className="button-no-style">gallery</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
