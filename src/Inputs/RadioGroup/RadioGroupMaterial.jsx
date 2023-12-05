import {FormControl, FormLabel, Radio, RadioGroup, Stack} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";

const RadioGroupMaterial = () => {
  return (
    <Stack spacing={2} direction="row">
      <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup row defaultValue="female">

              <FormControlLabel value="female" control={<Radio/>} label="female"/>
              <FormControlLabel value="Male" control={<Radio/>} label="Male"/>
              <FormControlLabel value="Other" control={<Radio/>} label="Other"/>

          </RadioGroup>
      </FormControl>
    </Stack>
  )
}

export default RadioGroupMaterial
