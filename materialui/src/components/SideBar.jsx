import { AccountBox, DarkMode, Group, Home, MobileFriendlySharp, Pages, PeopleAlt, Settings, Storefront } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

const SideBar = () => {
  return (
    <Box
       flex={1}
        p={2}
        m={1}
    sx={{display:{xs:"none",sm:"block"}}}
    >
        <Box position="fixed">
        <List>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#home">
                    <ListItemIcon>
                       <Home/>
                    </ListItemIcon>
                    <ListItemText primary="Homepage"/>
                </ListItemButton>

            </ListItem>


            <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                    <ListItemIcon>
                       <Settings/>
                    </ListItemIcon>
                    <ListItemText primary="Settings"/>
                </ListItemButton>

            </ListItem>

            <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-lst">
                    <ListItemIcon>
                       <AccountBox/>
                    </ListItemIcon>
                    <ListItemText primary="Profile"/>
                </ListItemButton>

            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-lst">
                    <ListItemIcon>
                       <Storefront/>
                    </ListItemIcon>
                    <ListItemText primary="Marketplace"/>
                </ListItemButton>

            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-lst">
                    <ListItemIcon>
                       <Pages/>
                    </ListItemIcon>
                    <ListItemText primary="Pages"/>
                </ListItemButton>

            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-lst">
                    <ListItemIcon>
                       <PeopleAlt/>
                    </ListItemIcon>
                    <ListItemText primary="Friends"/>
                </ListItemButton>

            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-lst">
                    <ListItemIcon>
                       <Group/>
                    </ListItemIcon>
                    <ListItemText primary="Groups"/>
                </ListItemButton>

            </ListItem>

            <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-lst">
                    <ListItemIcon>
                       <DarkMode/>
                    </ListItemIcon>
                    <Switch/> 
                </ListItemButton>

            </ListItem>
        </List>
        </Box>
        </Box>
  )
}

export default SideBar