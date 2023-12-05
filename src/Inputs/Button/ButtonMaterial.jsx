import Button from '@mui/material/Button';

import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import SaveIcon from '@mui/icons-material/Save';
import {ButtonGroup, IconButton, Stack, styled} from "@mui/material";
import AlarmIcon from "@mui/icons-material/Alarm";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {purple} from "@mui/material/colors";
import {LoadingButton} from "@mui/lab";

const ButtonUsage = () => {

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    // MAKE CUSTOM BUTTON FOR OVERALL PROJECT
    const ColorButton = styled(Button)(({theme}) => ({
        color: theme.palette.getContrastText(purple[300]),
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
    }));

    return (
        <>
            {/*OutlineButton*/}
            <Stack direction="row" spacing={10} sx={{margin: 4}}>
                <Button variant="outlined">Outline Button</Button>
                {/*Text*/}
                <Button variant="text">text Button </Button>
                {/*Container Button*/}
                <Button variant="contained">Contained</Button>
                {/*Primary*/}
                <Button>Primary</Button>
                {/*Disabled*/}
                <Button disabled>Disabled</Button>
                {/*Anchor Button*/}
                <Button href="#text-buttons" onClick={() => alert("Hello")}>Link</Button>
                <Button color="secondary">Secondary</Button>
                <Button variant="outlined" color="error">
                    Error
                </Button>
            </Stack>


            <Stack direction="row" spacing={10} sx={{margin: 4}}>
                {/*Small Buttons*/}
                <Button variant="contained" color="primary" size="small">Small</Button>
                <Button variant="contained" color="primary" size="medium">Medium</Button>
                <Button variant="contained" color="primary" size="large">Large</Button>
            </Stack>


            <Stack direction="row" spacing={10} sx={{margin: 4}}>
                {/*Buttons with icons and label*/}
                <Button variant="outlined" startIcon={<DeleteIcon/>}>
                    Delete
                </Button>

                <Button variant="contained" endIcon={<SendIcon/>}>
                    Send
                </Button>
            </Stack>


            {/*If you want to use the simple icons instead of button use the IconsButton Components*/}
            <Stack direction="row" spacing={10} sx={{margin: 4}}>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
                <IconButton color="secondary" aria-label="add an alarm">
                    <AlarmIcon/>
                </IconButton>
            </Stack>


            {/*For File upload Button */}
            <Stack direction="row" spacing={10} sx={{margin: 4}}>
            <span style={{cursor: "not-allowed"}}>
            <Button component="label" variant="contained" startIcon={<CloudUploadIcon/>}>
                Upload File
                <VisuallyHiddenInput type="file"/>
            </Button>
                </span>
            </Stack>


            {/*if you want to override the default behavior of Material Design use the sx property*/}
            {/*Use the sx property*/}
            <Stack direction="row" spacing={10} sx={{margin: 4}}>
                <Button variant="contained" color="secondary" sx={{width: 50}}>Use SX Props</Button>

                {/*Use Custom Buttons*/}
                <ColorButton startIcon={<DeleteIcon/>} variant="contained">Custom CSS</ColorButton>
            </Stack>

            {/*Want to use the loading button use build in loading button*/}
            {/*To make use the loading install the  npm install @mui/lab @mui/material*/}
            <Stack direction="row" spacing={2} sx={{margin: 4}}>
                <LoadingButton loading/>
                <LoadingButton loading loadingIndicator="loading...."/>
                <LoadingButton loading loadingPosition="start" startIcon={<SaveIcon/>}>Bonjour</LoadingButton>
            </Stack>


            <Stack direction="row" spacing={2} sx={{margin: 4}}>
                <ButtonGroup variant="contained">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
                <ButtonGroup variant="outlined">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>

                <ButtonGroup variant="text" aria-label="text button group" sx={{mx: 2}}>
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </Stack>

        </>
    )
}

export default ButtonUsage
