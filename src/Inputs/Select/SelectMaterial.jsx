import { FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useState} from "react";

const SelectMaterial = () => {
    const [age, setAge] = useState('')
    const handlerChange = (e) => {
        setAge(e.target.value)
    }
    return (
        <div style={{marginTop: "80px"}}>
            <FormControl sx={{minWidth: 120}}>
                <InputLabel id="select-demo">Age</InputLabel>
                <Select labelId="select-demo" value={age} onChange={handlerChange}>
                    <MenuItem value={10}>TEN</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default SelectMaterial
