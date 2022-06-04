import { Box } from '@mui/material'
import React from 'react'

const SideBar = () => {
  return (
    <Box bgcolor="yellow" flex={1} p={2} m={1}
    sx={{display:{xs:"none",sm:"block"}}}
    >SideBar</Box>
  )
}

export default SideBar