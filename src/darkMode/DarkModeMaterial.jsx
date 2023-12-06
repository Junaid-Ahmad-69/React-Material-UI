// import {createContext, useContext, useMemo, useState} from "react";
// import {createTheme, ThemeProvider} from "@mui/material/styles";
//
//
// // 1) Simple define the createContext form React
// const ColorModeContext = createContext({
//     toggleColorMode: () => {
//     }
// })
// const DarkModeMaterial = ({children}) => {
//
//     const ColorMode = useContext(ColorModeContext);
//     const [mode, setMode] = useState('light')
//     const colorMode = useMemo(() => ({
//         toggleColorMode: () => {
//             setMode(prevState => (prevState === "light" ? "dark" : "light"))
//         }
//     }), []);
//
//     const theme = useMemo(() => {
//         createTheme({
//             palette: {
//                 mode,
//             }
//         })
//     }, [mode]);
//
//
//     return (
//         <ColorMode.Provider value={colorMode} >
//             <ThemeProvider theme={theme}>
//                 {children}
//             </ThemeProvider>
//
//         </ColorMode.Provider>
//     )
// }
//
// export default DarkModeMaterial

