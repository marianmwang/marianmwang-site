import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, animateScroll as scroll } from "react-scroll";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import "../pages/styles.css";

const Layout = ({ children }) => {
  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 1000 });
  };

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
          <ul>
            <li>
              <Link
                className="sidenav-link"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
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
                offset={-70}
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
                offset={-70}
                duration={500}
              >
                <button className="button-no-style">gallery</button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidenav-section">
          <ul>
            <li>
              <a href="https://drive.google.com/file/d/1RyUoUS1dxxd8SvV8xkZ0FKMLNhwFXgW4/view?usp=sharing">
                <FontAwesomeIcon icon="fas envelope" />
                resume
              </a>
            </li>
            <li>
              <a href="mailto:marian.mian.wang@gmail.com">
                <FontAwesomeIcon icon="fas fa-envelope" />
                <FontAwesomeIcon icon={"faEnvelope"} />
                email
                <i class="fas fa-paper-plane"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/marianmwang">
                <FontAwesomeIcon icon="fa-brands fa-github" />
                github
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
