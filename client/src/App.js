import React, { useState } from "react";
// import "./App.css";
import SideBar from "./sidebar/SideBar.jsx"
import NavBar from "./navbar/NavBar.jsx"
import Feed from "./feed/Feed.jsx"
import RightBar from "./rightbar/RightBar.jsx"
import {Box, createTheme, Stack, ThemeProvider} from "@mui/material"
// import {theme} from './theme'
import AddPost from "./addPost/AddPost.jsx";

function App() {
  const [mode,setMode] =useState("light");
  const darkTheme = createTheme({
    palette:{
      mode:mode
    }
  })

  return (
    <Box >
      <NavBar/>
      <Stack direction="row" spacing={5} justifyContent="space-between">
      <SideBar/>
      <Feed/>
      <RightBar/>
      </Stack>
      <AddPost/>
    </Box> 

  );
}

export default App;
