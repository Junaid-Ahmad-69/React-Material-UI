import {Fab, Stack} from "@mui/material";
import AddIcon from "@mui/icons-material/Add"
import EditIcon from "@mui/icons-material/Edit"
import NavigateIcon from "@mui/icons-material/Navigation"
const FloatingActionButton = () => {
  return (
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
  )
}

export default FloatingActionButton
