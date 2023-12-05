import {Box, Slider, Stack, Typography} from "@mui/material";
import {VolumeDown, VolumeUp} from "@mui/icons-material";

const SliderMaterial = () => {
    const marks = [
        {
            value: 0,
            label: '0°C',
        },
        {
            value: 20,
            label: '20°C',
        },
        {
            value: 37,
            label: '37°C',
        },
        {
            value: 100,
            label: '100°C',
        },
    ];

    function valuetext(value) {
        return `${value}°C`;
    }
    return (
        <Box sx={{maxWidth: 1200, mx: "auto"}}>
            <h1 style={{margin: "30px auto 30px auto", textAlign: "center"}}>Sliders & Volume</h1>

            <Typography>Simple Value and slider</Typography>
            <Stack spacing={2} direction="row" sx={{mb: 1}} alignItems="center">
                <VolumeDown/>
                <Slider/>
                <VolumeUp/>
            </Stack>
            <Typography>Disabled slider</Typography>
            <Slider disabled defaultValue={30}/>
            {/*Slider with values*/}
            <Typography>Small slider with values label</Typography>
            <Stack spacing={2} direction="row" sx={{mb: 1}} alignItems="center">
                <Slider defaultValue={30} size='small' valueLabelDisplay="auto"/>
            </Stack>

            {/*Discrete Slider with values*/}
            <Typography>Discrete sliders</Typography>
            <Stack spacing={2} direction="row" sx={{mb: 1}} alignItems="center">
                <Slider defaultValue={30} size='small' valueLabelDisplay="auto" marks min={10} max={110} step={20}/>
            </Stack>
            {/*Custom Slider with values*/}
            <Typography>Custom sliders</Typography>
            <Stack spacing={2} direction="row" sx={{mb: 1}} alignItems="center">
                <Slider defaultValue={20} getArialValuesTextt={valuetext} valueLabelDisplay="auto"
                        marks={marks} size='small' min={10} max={110} step={20}/>
            </Stack>
        </Box>
    )
}

export default SliderMaterial
