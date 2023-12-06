import {Box, Typography} from "@mui/material";
import {Rating} from "@mui/lab";

const RatingMaterial = () => {
    return (
        <Box sx={{maxWidth: 1200, mx: "auto"}}>
            <h1 style={{margin: "30px auto 30px auto", textAlign: "center"}}>Ratings</h1>
            <Typography component="legend">Controlled</Typography>
            <Rating defaultValue={2.5} precision={0.5}></Rating>


            <Typography component="legend">Read only</Typography>
            {/*<Rating name="read-only" value={value} readOnly />*/}

            <Typography component="legend">Disabled</Typography>
            {/*<Rating name="disabled" value={value} disabled />*/}

        </Box>
    )
}

export default RatingMaterial
