import React from "react";

import "../pages/styles.css";

const About = ({ image, altText }) => {
  return (
    <div className="container" id="about">
      <h2>
        about me<br></br>—
      </h2>
      <p>
        i'm a computer science and cognitive science student at the university
        of toronto exploring software development and design. i love learning
        about new technologies, and i'm always looking for ways to improve our
        everyday lives.
      </p>
      <p>i'm currently looking for opportunities in software development for the fall 2022 season.</p>
      <p style={{ marginTop: 0.5 + `em` }}>
        check out my resume for the most up to date information, and contact me
        by email if interested.
      </p>
      <p>
        in my free time, i enjoy watching anime and korean dramas, doing digital art,
        and eating delicious food with friends.
      </p>
    </div>
  );
};

export default About;
