import {Badge, Box, Typography} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

const BadgeMaterial = () => {
    return (
        <Box sx={{maxWidth: 1200, mx: "auto"}}>
            <h1 style={{margin: "30px auto 30px auto", textAlign: "center"}}>Badges</h1>

            <Typography sx={{my: 2}}>Simple Badge</Typography>
            <Badge badgeContent={4} color="primary">
                <MailIcon color="action"/>
            </Badge>

            {/*Badge Material*/}
            <Typography sx={{my: 2}}>Color Full Badge</Typography>
            <Badge badgeContent={4} color="secondary">
                <MailIcon color="action"/>
            </Badge>
            <Badge badgeContent={4} color="success">
                <MailIcon color="action"/>
            </Badge>

            {/*Max Badge*/}
            <Typography sx={{my: 2}}>Max Badge</Typography>
            <Badge color="secondary" badgeContent={1000} max={999}>
                <MailIcon/>
            </Badge>

            {/*Dot Badge*/}
            <Typography sx={{my: 2}}>Max Badge</Typography>
            <Badge color="secondary" variant="dot">
                <MailIcon />
            </Badge>


        </Box>
    )
}

export default BadgeMaterial
