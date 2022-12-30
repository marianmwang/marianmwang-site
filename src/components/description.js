import { Link, Typography } from "@mui/material";
import React from "react";

function StyledText({ children }) {
  return (
    <Typography
      color="textPrimary"
      fontSize="1em"
      fontWeight="100"
      marginTop="1em"
      letterSpacing="0.05em"
    >
      {children}
    </Typography>
  );
}

function StyledLink({ href, children }) {
  return (
    <Link
      href={href}
      bgcolor="rgba(92, 109, 112, 30%)"
      padding="0.2em"
      target="_blank"
    >
      {children}
    </Link>
  );
}

function Description() {
  return (
    <>
      <StyledText>Hey there! I'm Marian.</StyledText>
      <StyledText>
        I'm currently interning at{" "}
        <StyledLink href="https://www.brilliant.tech/">
          Brilliant.tech
        </StyledLink>{" "}
        in San Mateo, CA. Previously, I interned at{" "}
        <StyledLink href="https://www.twitter.com/">Twitter</StyledLink> and{" "}
        <StyledLink href="https://www.amazon.com/">Amazon</StyledLink>, and I'm
        headed to{" "}
        <StyledLink href="https://www.khanacademy.org/">
          Khan Academy
        </StyledLink>{" "}
        this summer.
      </StyledText>
      <StyledText>
        In my free time, you can find me enjoying coffee and a{" "}
        <StyledLink href="https://marianmwang.notion.site/media-list-bb1a75b309b3413bbce4d038be6c77f8">
          good book
        </StyledLink>
        ,{" "}
        <StyledLink href="https://www.instagram.com/flarethey/">
          drawing fanart
        </StyledLink>
        , or climbing rocks at my local bouldering gym.
      </StyledText>
      <StyledText>
        Let's chat!{" "}
        <span role="img" aria-label="coffee icon">
          ☕️
        </span>
      </StyledText>
    </>
  );
}

export default Description;
