import React from "react";

import "../pages/styles.css";
import AboutImage from "../components/AboutImage.jsx";
import aboutInfo from "../resources/about/aboutInfo.json";

const aboutImages = () => {
  return (
    <div className="container">
      <AboutImage {...aboutInfo["selfie"]} />
    </div>
  );
};

export default aboutImages;
