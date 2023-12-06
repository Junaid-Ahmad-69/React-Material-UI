import React, {useState} from 'react'
import DividerMaterial from "./DataDisplay/Divider/DividerMaterial";
import ToggleButtonMaterial from "./Inputs/ToggleButton/ToggleButtonMaterial";
import AvatarMaterial from "./DataDisplay/Avatar/AvatarMaterial";
import ButtonUsage from "./Inputs/Button/ButtonMaterial";
import {CheckBoxMaterial} from "./Inputs/CheckBox/CheckBoxMaterial";
import FloatingActionButton from "./Inputs/FloatingActionButton/FloatingActionButton";
import RadioGroupMaterial from "./Inputs/RadioGroup/RadioGroupMaterial";
import RatingMaterial from "./Inputs/Rating/RatingMaterial";
import SelectMaterial from "./Inputs/Select/SelectMaterial";
import SliderMaterial from "./Inputs/Slider/SliderMaterial";
import SwitchMaterial from "./Inputs/Switch/SwitchMaterial";
import TextFiledMaterial from "./Inputs/TextFiled/TextFiledMaterial";
import BadgeMaterial from "./DataDisplay/Badge/BadgeMaterial";
import ChipMaterial from "./DataDisplay/Chip/ChipMaterial";
import {createTheme, CssBaseline, ThemeProvider, Switch, Typography} from "@mui/material";
import {responsiveTheme} from "./Utils/MediaQueries";


const App = () => {
    const [toggleDarkMode, setToggleDarkMode] = useState(true);

    // function to toggle the dark mode as true or false
    const toggleDarkTheme = () => {
        setToggleDarkMode(!toggleDarkMode);
    };


    // applying the primary and secondary theme colors
    const darkTheme = createTheme({
        palette: {
            mode: toggleDarkMode ? 'dark' : 'light',
            primary: {
                main: '#90caf9',
            },
            secondary: {
                main: '#131052',

            },
            background: {
                default: toggleDarkMode ? "#161c24" : "#fff"
            }
        },
    });
    return (

        <ThemeProvider theme={responsiveTheme}>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline/> {/* Applies the global styles for the dark theme */}
                <div>
                    <Typography sx={{textAlign: "center", m: 4}}
                                variant="h1">{`Welcome to ${toggleDarkMode ? "Dark" : "Light"} Theme`}</Typography>
                    <Switch checked={toggleDarkMode} onChange={toggleDarkTheme}/>
                    {/* Your other components */}
                </div>
                <ButtonUsage/>
                <CheckBoxMaterial/>
                <FloatingActionButton/>
                <RadioGroupMaterial/>
                <RatingMaterial/>
                <SelectMaterial/>
                <SliderMaterial/>
                <SwitchMaterial/>
                <TextFiledMaterial/>
                <ToggleButtonMaterial/>
                <AvatarMaterial/>
                <BadgeMaterial/>
                <ChipMaterial/>
                <DividerMaterial/>
            </ThemeProvider>
        </ThemeProvider>
    )
}
export default App
