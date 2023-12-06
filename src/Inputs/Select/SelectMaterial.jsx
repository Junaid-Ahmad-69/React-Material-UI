import { Box, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useState} from "react";

const SelectMaterial = () => {
    const [age, setAge] = useState('')
    const handlerChange = (e) => {
        setAge(e.target.value)
    }
    return (
        <Box sx={{maxWidth: 1200, mx: "auto"}}>
            <h1 style={{margin: "30px auto 30px auto", textAlign: "center"}}>Select From Group</h1>
            <FormControl sx={{minWidth: 120}}>
                <InputLabel id="select-demo">Age</InputLabel>
                <Select labelId="select-demo" value={age} onChange={handlerChange}>
                    <MenuItem value={10}>TEN</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default SelectMaterial
