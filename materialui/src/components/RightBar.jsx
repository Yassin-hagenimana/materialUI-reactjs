import { Box } from '@mui/material'
import React from 'react'

 const RightBar = () => {
  return (
    <Box bgcolor="green" flex={2} p={2} m={1}
    sx={{display:{xs:"none",sm:"block"}}}>RightBar</Box>
  )
}
export default RightBar