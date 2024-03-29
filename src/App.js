import React from "react";
import "./App.css";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import "@fontsource/metropolis/300.css";
import "@fontsource/metropolis/400.css";
import "@fontsource/metropolis/500.css";
import "@fontsource/metropolis/700.css";
import "@fontsource/eb-garamond/400.css";
import Header from "./components/header";
import Description from "./components/description";

const THEME = createTheme({
  typography: {
    fontFamily: [
      "Metropolis",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    primary: { main: "#FFFBFC" },
    secondary: { main: "#5C6D70" },
    text: {
      primary: "#FFFBFC",
      secondary: "#5C6D70",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <Box display="flex" justifyContent="center" height="50em">
        <Box
          border="1px solid #5C6D70"
          borderRadius="5px"
          padding="2em"
          alignSelf="center"
          className="responsiveBox"
        >
          <Header />
          <Description />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
