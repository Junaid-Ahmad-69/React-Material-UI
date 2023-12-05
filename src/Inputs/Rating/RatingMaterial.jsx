import {Box, Typography} from "@mui/material";
import {Rating} from "@mui/lab";

const RatingMaterial = () => {
    return (
        <Box sx={{'& > legend': {mt: 2}}}>
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
