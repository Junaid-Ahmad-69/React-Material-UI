import {Box, Stack, Switch, Typography} from "@mui/material";

const SwitchMaterial = () => {
    return (
        <Box sx={{maxWidth: 1200, mx: "auto"}}>
            <h1 style={{margin: "30px auto 30px auto", textAlign: "center"}}>Switch</h1>

            <Typography>Simple switcher</Typography>
            <Stack spacing={2} direction="row" sx={{mb: 1}} alignItems="center">
              <Switch defaultChecked/>
            </Stack>


            {/*Color full Slider*/}
            <Typography>Color switcher</Typography>
            <Stack spacing={2} direction="row" sx={{mb: 1}} alignItems="center">
              <Switch defaultChecked color="secondary"/>
              <Switch defaultChecked color="primary"/>
              <Switch defaultChecked color="warning"/>
              <Switch defaultChecked color="default"/>
            </Stack>
        </Box>
    )
}

export default SwitchMaterial
