import{Button, styled, Typography} from "@mui/material"
import {Add,Settings} from "@mui/icons-material";
function Basics() {

  const BlueButton=styled(Button)({
    backgroundColor:"skyblue",
      color:"#888",
      margin:8,
      "&:hover":{
        backgroundColor:"lightblue"
      },
      "&:disabled":{
        backgroundColor:"gray",
        color:"white"
      }
  })
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button
       startIcon={<Settings/>}
        variant="contained"
         color="secondary" 
         size="small"
         >
           Sttings
           </Button>

           <Button
           startIcon={<Add/>}
           variant="contained"
           color="success" 
           size="small"
         >
           Add new Post
           </Button>
      <Button variant="outlined" disabled>Outlined</Button>
    
     <Typography variant="h1" component="p">
      it uses h1 styles but it is a p tag
    </Typography>;

    <Button variant="contained" disabled sx={{
      backgroundColor:"skyblue",
      color:"#888",
      margin:8,
      "&:hover":{
        backgroundColor:"lightblue"
      },
      "&:disabled":{
        backgroundColor:"gray",
        color:"white"
      }
    }}
    >Unique Button
    </Button>

   <BlueButton>My Button</BlueButton>
   <BlueButton>Another Button</BlueButton>

    </div>
  );
}

export default Basics;
