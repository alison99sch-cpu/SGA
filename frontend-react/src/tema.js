import { createTheme } from "@mui/material/styles";

const tema = createTheme({
    colorSchemes: {
        light: {
            palette:{
                primary:{
                    main: "#24748a",
                    contrastText: "#ffffff"
                },
                secondary:{
                    main:"#29496e",
                    contrastText: "#fcfbf0"

                },
                background:{
                    default:"#f2f7fa",
                    paper:"#ffffff"
                },
                text:{
                    primary: "#1b1c1e",
                    secondary: "#162d4a"
                },
                divider: "#99a8ca"
            }
        },

        dark: {
            palette: {
                    primary: {
                        main:"#66c5b4",
                        contrastText: "#10211e"
                    },
                    secondary: {
                        main: "#8eaddf",
                        contrastText: "#feffea"
                    },
                    background:{
                        default: "#101923",
                        paper: "#182531"
                    },
                    text:{
                        primary:"#f7f8fa",
                        secondary:"#a9bacb"
                    },
                    divider: "#344756"
            }
        }
    }
})

export {tema}