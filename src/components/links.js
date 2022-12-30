import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import DescriptionIcon from "@mui/icons-material/Description";
import { Box, IconButton, Typography } from "@mui/material";

function StyledIconButton({ href, children, label }) {
  return (
    <Box textAlign="center">
      <IconButton
        href={href}
        target="_blank"
        sx={{ padding: "0.5em 0.5em 0 0.5em" }}
      >
        {children}
      </IconButton>
      <Typography display="block" color="textPrimary" fontSize="0.8em">
        {label}
      </Typography>
    </Box>
  );
}

function Links() {
  return (
    <Box justifyContent="right" display="flex">
      <StyledIconButton
        href="https://drive.google.com/file/d/1RyUoUS1dxxd8SvV8xkZ0FKMLNhwFXgW4/view"
        label="Resume"
      >
        <DescriptionIcon color="primary" fontSize="large" />
      </StyledIconButton>
      <StyledIconButton
        href="https://linkedin.com/in/marianmwang"
        label="LinkedIn"
      >
        <LinkedInIcon color="primary" fontSize="large" />
      </StyledIconButton>
      <StyledIconButton
        href="mailto:marian.mian.wang@gmail.com"
        label="Email Me"
      >
        <EmailIcon color="primary" fontSize="large" />
      </StyledIconButton>
    </Box>
  );
}

export default Links;
