import {Box,Fab, Stack} from "@mui/material";
import AddIcon from "@mui/icons-material/Add"
import EditIcon from "@mui/icons-material/Edit"
import NavigateIcon from "@mui/icons-material/Navigation"
const FloatingActionButton = () => {
  return (
      <Box sx={{maxWidth: 1200, mx: "auto"}}>
          <h1 style={{margin: "30px auto 30px auto", textAlign: "center"}}>Buttons & Buttons Group</h1>
    <Stack spacing={2} direction="row">
        <Fab color="primary">
            <AddIcon/>
        </Fab>
        <Fab color="secondary">
            <EditIcon/>
        </Fab>
        <Fab variant="extended" >
            <NavigateIcon sx={{mr: 1}}/>
            Navigate
        </Fab>
    </Stack>
      </Box>
  )
}

export default FloatingActionButton
