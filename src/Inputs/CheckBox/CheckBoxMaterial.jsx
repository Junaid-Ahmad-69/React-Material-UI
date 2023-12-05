import CheckBox from '@mui/material/Checkbox';
import {Box, Container, FormControl, FormGroup, FormLabel, Stack} from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";

export const CheckBoxMaterial = () => {
    return (
        <>
            <Stack direction="row" spacing={4}>
                <CheckBox defaultChecked/>
                <CheckBox disabled checked/>
            </Stack>

            {/*if you want to make the multiple checkboxes with label use the following code below*/}
            <FormGroup>
                <FormControlLabel control={<CheckBox defaultChecked/>} label="Label"/>
                <FormControlLabel required control={<CheckBox/>} label="Label"/>
                <FormControlLabel disabled control={<CheckBox defaultChecked/>} label="Label"
                                  sx={{'& .MuiSvgIcon-root': {fontSize: 28}}}/>
            </FormGroup>

            {/*CheckBox Icons*/}
            <CheckBox icon={<BookmarkBorderIcon/>} checkedIcon={<BookmarkIcon/>} color="secondary"/>
            <CheckBox icon={<FavoriteBorder/>} checkedIcon={<Favorite/>} color="success"/>


            <Container maxwidth="sm">
                <Box sx={{display: "flex"}}>
                    <FormControl sx={{m:3}} component="fieldset" variant="standard">
                        <FormLabel component="legend">Assign Responsibility</FormLabel>
                        <FormGroup>
                            <FormControlLabel control={<CheckBox/>} label="Gilad Gray"/>
                            <FormControlLabel control={<CheckBox/>} label="Json"/>
                            <FormControlLabel control={<CheckBox/>} label="Doe"/>
                        </FormGroup>
                    </FormControl>
                    <FormControl sx={{m:3}} component="fieldset" variant="standard">
                        <FormLabel component="legend">Assign Responsibility</FormLabel>
                        <FormGroup>
                            <FormControlLabel control={<CheckBox/>} label="Gilad Gray"/>
                            <FormControlLabel control={<CheckBox/>} label="Json"/>
                            <FormControlLabel control={<CheckBox/>} label="Doe"/>
                        </FormGroup>
                    </FormControl>
                </Box>
            </Container>


        </>
    )
}
