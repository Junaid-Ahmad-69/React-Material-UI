import {Box, Stack, TextField, Typography} from "@mui/material";

const TextFiledMaterial = () => {
  return (
      <Box sx={{maxWidth: 1200, mx: "auto"}}>
          <h1 style={{margin: "30px auto 30px auto", textAlign: "center"}}>Text Field</h1>

          <Typography sx={{mb: 2}}>Simple TextField</Typography>
          <Stack spacing={2} direction="row" sx={{mb: 1}} alignItems="center">
              <TextField label="Email" variant="outlined" />
          </Stack>

          <Typography sx={{mb: 2}}>Filled TextField</Typography>
          <Stack spacing={2} direction="row" sx={{mb: 1}} alignItems="center">
              <TextField label="Name" variant="filled" />
          </Stack>

          <Typography sx={{mb: 2}}>Standard Text</Typography>
          <Stack spacing={2} direction="row" sx={{mb: 1}} alignItems="center">
              <TextField label="Standard" variant="standard" />
          </Stack>
      </Box>
  )
}

export default TextFiledMaterial
