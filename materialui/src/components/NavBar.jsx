import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography} from '@mui/material'
import React, { useState } from 'react'
import { Mail, Notifications, Pets} from '@mui/icons-material';
const StyledToolBar=styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})

const Search=styled("div")(({theme})=>({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius:theme.shape.borderRadius,
    width:"40%"
}))

const Icons=styled(Box)(({theme})=>({
display:"none",
gap:"20px",
alignItems:"center",
[theme.breakpoints.up("sm")]:{
        display:"flex"
}
}))

const UserBox=styled(Box)(({theme})=>({
    display:"flex",
    gap:"10px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
    }))

 const NavBar = () => {
     const[open,setOpen]=useState(false)
  return (
    <AppBar position='sticky'>
        <StyledToolBar>
        <Typography variant='h6' sx={{display:{xs:"none",sm:"block"}}}>YASSIN-DEV</Typography>
        <Pets sx={{display:{xs:"block",sm:"none"}}} />
        <Search><InputBase placeholder='Search...'/></Search>
        <Icons>
        <Badge badgeContent={4} color="error">
          <Mail/>
       </Badge>
        <Badge badgeContent={2} color="error">
          <Notifications/>
          </Badge>
          <Avatar
           sx={{width:30,height:30}} 
           onClick={e=>setOpen(true)}
           src=' "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"'/>
        </Icons>

        <UserBox onClick={e=>setOpen(true)}>
        <Avatar sx={{width:30,height:30}} src=' "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"'/>
        <Typography variant='span'>yassin</Typography>
        </UserBox>
        </StyledToolBar>
        
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"

        open={open}
        onClose={(e)=>setOpen(false)}
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
export default NavBar
