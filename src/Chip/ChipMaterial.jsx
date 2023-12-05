import {Avatar, Box, Chip, Stack, Typography} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete"


const ChipMaterial = () => {
    return (
        <Box sx={{maxWidth: 1200, mx: "auto"}}>
            <h1 style={{margin: "30px auto 30px auto", textAlign: "center"}}>Chip</h1>

            <Typography sx={{mb: 2}}>Simple Basic chip</Typography>

            <Stack spacing={2} direction="row" sx={{mb: 1}} alignItems="center">
                <Chip label="Chip Filled"/>
                <Chip label="Chip Outlined" variant="outlined"/>
            </Stack>

            <Typography sx={{mb: 2}}>Deleted Chips</Typography>
            <Stack spacing={2} direction="row" sx={{mb: 1}} alignItems="center">
                <Chip label="Deleted" variant="outlined"/>
            </Stack>
            <Typography sx={{mb: 2}}>Delete Icon</Typography>
            <Stack spacing={2} direction="row" sx={{mb: 1}} alignItems="center">
                <Chip label="Custom Delete Icon" deleteIcon={<DeleteIcon/>}/>
            </Stack>

            <Typography sx={{mb: 2}}>Delete Icon</Typography>
            <Stack spacing={2} direction="row" sx={{mb: 1}} alignItems="center">
                <Chip avatar={<Avatar src="https://picsum.photos/seed/picsum/200/300"/>} label="John Doe"/>
            </Stack>

        </Box>
    )
}

export default ChipMaterial
