import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import DescriptionIcon from "@mui/icons-material/Description";
import { Box, IconButton, Typography } from "@mui/material";

function Links() {
  return (
    <Box justifyContent="right" display="flex">
      <Box textAlign="center">
        <IconButton
          href="https://drive.google.com/file/d/1RyUoUS1dxxd8SvV8xkZ0FKMLNhwFXgW4/view"
          target="_blank"
          sx={{ padding: "0.5em 0.5em 0 0.5em" }}
        >
          <DescriptionIcon color="primary" fontSize="large" />
        </IconButton>
        <Typography display="block" color="textPrimary" fontSize="0.8em">
          Resume
        </Typography>
      </Box>
      <Box textAlign="center">
        <IconButton
          href="https://linkedin.com/in/marianmwang"
          target="_blank"
          sx={{ padding: "0.5em 0.5em 0 0.5em" }}
        >
          <LinkedInIcon color="primary" fontSize="large" />
        </IconButton>
        <Typography display="block" color="textPrimary" fontSize="0.8em">
          LinkedIn
        </Typography>
      </Box>
      <Box textAlign="center">
        <IconButton
          href="mailto:marian.mian.wang@gmail.com"
          target="_blank"
          sx={{ padding: "0.5em 0.5em 0 0.5em" }}
        >
          <EmailIcon color="primary" fontSize="large" />
        </IconButton>
        <Typography display="block" color="textPrimary" fontSize="0.8em">
          Email Me
        </Typography>
      </Box>
    </Box>
  );
}

export default Links;
