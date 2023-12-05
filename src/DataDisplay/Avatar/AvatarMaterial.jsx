import {Avatar, Box, Stack, Typography} from "@mui/material";
import {deepOrange, green, purple} from "@mui/material/colors";
import FolderIcon from "@mui/icons-material/Folder"
import AssignmentIcon from "@mui/icons-material/Assignment"
import {AvatarGroup} from "@mui/lab";
const AvatarMaterial = () => {
    return (
        <Box sx={{maxWidth: 1200, mx: "auto"}}>
            <h1 style={{margin: "30px auto 30px auto", textAlign: "center"}}>Avatar Images</h1>

            <Typography sx={{mb: 2}}>Simple Avatar Images</Typography>
            <Stack spacing={2} direction="row" sx={{mb: 1}} alignItems="center">
                <Avatar alt="person profile" src="https://picsum.photos/v2/list"/>
                <Avatar alt="person profile" src="https://picsum.photos/200/300"/>
                <Avatar alt="person profile" src="https://picsum.photos/seed/picsum/200/300"/>
            </Stack>

            <Typography sx={{mb: 2}}>Text Avatar</Typography>
            <Stack spacing={2} direction="row" sx={{mb: 1}} alignItems="center">
                <Avatar>M</Avatar>
                <Avatar sx={{bgcolor: deepOrange[500]}}>M</Avatar>
                <Avatar sx={{bgcolor: purple[500]}}>MJ</Avatar>
            </Stack>

            <Typography sx={{mb: 2}}>Icons Avatar</Typography>
            <Stack spacing={2} direction="row" sx={{mb: 1}} alignItems="center">
                <Avatar>
                    <FolderIcon />
                </Avatar>
                <Avatar sx={{ bgcolor: green[500] }}>
                    <AssignmentIcon />
                </Avatar>
            </Stack>

            <Typography sx={{mb: 2}}>Broker Image Avatar & Placeholder Avatar</Typography>
            <Stack spacing={2} direction="row" sx={{mb: 1}} alignItems="center">
                <Avatar src="/broken-image.jpg" />
            </Stack>

            <Typography sx={{mb: 2}}>Group Avatar</Typography>
            <Stack spacing={2} direction="row" sx={{mb: 1}} alignItems="center">
                <AvatarGroup max={4}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                </AvatarGroup>
            </Stack>
        </Box>
    )
}

export default AvatarMaterial
