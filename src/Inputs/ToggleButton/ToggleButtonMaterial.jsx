import {Box, Stack, Typography} from "@mui/material";
import {ToggleButton, ToggleButtonGroup} from "@mui/lab";
import FormatBoldIcon from "@mui/icons-material/FormatBold"
import FormatItalicIcon from "@mui/icons-material/FormatItalic"
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined"
import {useState} from "react";

const ToggleButtonMaterial = () => {
    const [formats, setFormats] = useState(() => ['bold', 'italic']);
    const [item, setItem] = useState("web");

    const handleFormat = (event, newFormats) => {
        setFormats(newFormats);
    };
    const handlerChange = (event, newFormats) => {
        setItem(newFormats);
    };

    return (
        <Box sx={{maxWidth: 1200, mx: "auto"}}>
            <h1 style={{margin: "30px auto 30px auto", textAlign: "center"}}>Toggle Buttons</h1>

            <Typography sx={{mb: 2}}>Simple Toggle Button</Typography>
            <Stack spacing={2} direction="row" sx={{mb: 1}} alignItems="center">
                <ToggleButtonGroup
                    value={formats}
                    onChange={handleFormat}
                    aria-label="text formatting"
                >
                    <ToggleButton value="bold" aria-label="bold">
                        <FormatBoldIcon/>
                    </ToggleButton>
                    <ToggleButton value="italic" aria-label="italic">
                        <FormatItalicIcon/>
                    </ToggleButton>
                    <ToggleButton value="underlined" aria-label="underlined">
                        <FormatUnderlinedIcon/>
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>

            <Typography sx={{mb: 2}}>Filled TextField</Typography>
            <Stack spacing={2} direction="row" sx={{mb: 1}} alignItems="center">
                <ToggleButtonGroup color="primary" exclusive value={item} onChange={handlerChange} label="Name" variant="filled">
                    <ToggleButton value="web">Web</ToggleButton>
                    <ToggleButton value="android">Android</ToggleButton>
                    <ToggleButton value="ios">iOS</ToggleButton>
                </ToggleButtonGroup>
            </Stack>

        </Box>
    )
}

export default ToggleButtonMaterial
