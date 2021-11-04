import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../pages/styles.css";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="sidenav">
        <h1>
          marian<br></br>wang
        </h1>
        <ul>
          <li>
            <a className="sidenav-link" href="/">
              about me
            </a>
          </li>
          <li>
            <a className="sidenav-link" href="#projects">
              projects
            </a>
          </li>
          <li>
            <a className="sidenav-link" href="#gallery">
              gallery
            </a>
          </li>
        </ul>
        <a href="https://drive.google.com/file/d/1RyUoUS1dxxd8SvV8xkZ0FKMLNhwFXgW4/view?usp=sharing">
          <FontAwesomeIcon icon="fa-solid fa-envelope" />resume |
        </a>
        <a href="mailto:marian.mian.wang@gmail.com">
          <FontAwesomeIcon icon="fa-solid fa-envelope" /> email |<i class="fa-solid fa-user"></i>
        </a>
        <a href="https://github.com/marianmwang">
          <FontAwesomeIcon icon="fa-brands fa-github" /> github
        </a>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
