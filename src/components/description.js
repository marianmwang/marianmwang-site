import { Typography } from "@mui/material";
import React from "react";
import { DESCRIPTION } from "../resources/description";

function Description() {
  return (
    <>
      {DESCRIPTION.map((text) => (
        <Typography
          color="textPrimary"
          fontSize="1em"
          fontWeight="100"
          marginTop="1em"
          letterSpacing="0.05em"
        >
          {text}
        </Typography>
      ))}
    </>
  );
}

export default Description;
