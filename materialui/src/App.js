import SideBar from "./components/SideBar"
import Feed from "./components/Feed"
import RightBar from "./components/RightBar"
import {Box, Stack} from "@mui/material"
import NavBar from "./components/NavBar";
function App() {
  return (
    <div>
      <Box>
        <NavBar/>
        <Stack direction="row" space={2} justifyContent="space-between">
        <SideBar/>
        <Feed/>
        <RightBar/>
        </Stack>
     </Box>
    </div>
  );
}

export default App;
