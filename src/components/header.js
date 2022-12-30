import { Box, Typography } from "@mui/material";
import React from "react";
import Links from "./links";

function Header() {
  return (
    <Box
      sx={{
        borderBottom: "0.5px solid #5C6D70",
        paddingBottom: "1em",
        marginBottom: "1em",
      }}
    >
      <Typography
        color="textPrimary"
        fontSize="3em"
        fontStyle="italic"
        letterSpacing="0.25em"
        fontFamily='"EB Garamond"'
        lineHeight="1em"
        marginBottom="0.2em"
      >
        Marian Wang
      </Typography>
      <Typography
        color="textPrimary"
        fontSize="1.2em"
        fontStyle="italic"
        letterSpacing="0.15em"
        fontFamily='"EB Garamond"'
        marginLeft="2em"
      >
        SWE Intern & CS @ UofT.
      </Typography>
      <Links />
    </Box>
  );
}

export default Header;
