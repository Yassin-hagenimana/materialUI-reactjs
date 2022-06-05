import React, { useState } from 'react'
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography} from "@mui/material"
import {Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from "@mui/icons-material"
import styled from '@emotion/styled'
 const Add = () => {
     const[open,setOpen]=useState(false)
     const StyledModal=styled(Modal)({
         display:"flex",
         alignItems:"center",
         justifyContent:"center"
     })
    
     const UserBox=styled(Box)({
        display:"flex",
        alignItems:"center",
        gap:"10px",
        marginBottom:"20px"
       

     })
  return (
    <>
    <Tooltip title="Delete" sx={{
        position:"fixed",
        bottom:20,
        left:{xs:"calc(40%)",md:30}
    }}
    onClick={e=>setOpen(true)}
    >
    <Fab color="primary" aria-label="add">
    <AddIcon />
</Fab>
   </Tooltip>
    
   <StyledModal
        open={open}
        onClose={e=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
    <Box width={400} height={300} borderRadius={3} p={3} bgcolor="background.default" color="text.primary">
          <Typography variant='h6' color="gray" textAlign="center">
              Create a post
              </Typography>
              <UserBox onClick={e=>setOpen(true)}>
        <Avatar sx={{width:30,height:30}} src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'/>
        <Typography variant='span' fontWeight={500}>Yassin</Typography>
        </UserBox>
        <TextField
        sx={{width:"100%"}}
          id="standard-multiline-static"
          multiline
          rows={2}
          placeholder="What's on your mind"
          variant="standard"
        />

        <Stack direction="row" gap={1} mt={2} mb={3}>
         <EmojiEmotions color='primary'/>
         <Image color='secondary'/>
         <VideoCameraBack color='success'/>
         <PersonAdd color='error'/>
        </Stack>

     <ButtonGroup 
     variant="contained" 
     aria-label="outlined primary button group"
     fullWidth
     >
      <Button>Post</Button>
      <Button sx={{width:"100px"}}>
          <DateRange/>
          </Button>
    </ButtonGroup>
    </Box>
</StyledModal>

    </>
  )
}

export default Add