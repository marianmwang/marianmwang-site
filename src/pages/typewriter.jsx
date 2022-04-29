import React from "react";
import Typewriter from "typewriter-effect";

import "../pages/styles.css";

const Type = () => {
  return (
    <div className="container" id="typewriter">
      <h2>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("hey! welcoem")
              .deleteChars(2)
              .typeString("me to my sie")
              .deleteChars(1)
              .typeString("te.")
              .pauseFor(10000)
              .typeString("<br>whoa, you're still here? ")
              .pauseFor(2000)
              .typeString("<br>thanks for sticking around!")
              .start();
          }}
        />
      </h2>
    </div>
  );
};

export default Type;
