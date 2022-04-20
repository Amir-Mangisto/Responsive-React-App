import styled from '@emotion/styled'
import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import React, { useState } from 'react'
import { Box, width } from '@mui/system';


const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
})
const Search =styled("div")(({theme})=>({
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius:"10px",
  width:"40%"
}))
const Icons=styled(Box)(({theme})=>({
  display:"none",
  gap:"20px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}))

const UserBox =styled(Box)(({theme})=>({
  display:"flex",
  gap:"10px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}))

export default function NavBar() {
  const [open,setOpen] = useState(false)
  return (
    <AppBar position='sticky'>
      <StyledToolbar >
      <Typography variant='h5' sx={{display:{xs:"none",sm:"block"}}}>Mango-App</Typography>
      <PetsIcon sx={{display:{xs:"block",sm:"none"}}}/>
      <Search>
        <InputBase placeholder='Search...'/>
      </Search>
      <Icons>
      <Badge badgeContent={4} color="error">
      <MailIcon />
    </Badge>
    <Badge badgeContent={2} color="error">
      <NotificationsIcon/>
    </Badge >
    <Avatar sx={{width:30, height:30}}
        onClick={e=>setOpen(true)} />
      </Icons>
      <UserBox>
        <Avatar sx={{width:30, height:30}} 
        onClick={e=>setOpen(true)} />
        <Typography variant='span'>Amir</Typography>
      </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}
