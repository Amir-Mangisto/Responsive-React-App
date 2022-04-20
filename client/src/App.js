import React from "react";
// import "./App.css";
import SideBar from "./sidebar/SideBar.jsx"
import NavBar from "./navbar/NavBar.jsx"
import Feed from "./feed/Feed.jsx"
import RightBar from "./rightbar/RightBar.jsx"
import {Box, Stack} from "@mui/material"
import { ThemeProvider } from "@emotion/react";
import {theme} from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Box className="App">
      <NavBar/>
      <Stack direction="row" spacing={5} justifyContent="space-between">
      <SideBar/>
      <Feed/>
      <RightBar/>
      </Stack>
    </Box> 
    </ThemeProvider>
  );
}

export default App;
