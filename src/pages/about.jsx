import React from "react";

import "../pages/styles.css";

const About = ({ image, altText }) => {
  return (
    <div className="container" id="about">
      <h2>
        about me<br></br>—
      </h2>
      <p>
        i'm a <strong>computer science and cognitive science student</strong> at the university
        of toronto exploring software development and design. i love learning
        about new technologies, and i'm always looking for ways to improve our
        everyday lives.
      </p>
      <p>
        i'm currently looking for opportunities in software development for the{" "}
        <strong>fall 2022</strong> season.
      </p>
      <p>
        check out my{" "}
        <strong>
          <a
            href="https://drive.google.com/file/d/1RyUoUS1dxxd8SvV8xkZ0FKMLNhwFXgW4/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </a>
        </strong>{" "}
        for the most up to date information, and contact me by email if
        interested.
      </p>
      <p>
        in my free time, i enjoy watching anime and korean dramas, doing digital
        art, and eating delicious food with friends.
      </p>
    </div>
  );
};

export default About;
