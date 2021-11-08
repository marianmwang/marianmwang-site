import React from "react";
import "./aboutImage.css";

const AboutImage = ({ desc, image, altText }) => {
  return (
    <div>
      <img className="about-image" src={require(`../resources/images/${image}`)} alt={altText}></img>
      <div className="about-image-desc">{desc}</div>
    </div>
  );
};

export default AboutImage;
