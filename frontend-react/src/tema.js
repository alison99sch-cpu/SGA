import { createTheme } from "@mui/material/styles";

const tema = createTheme({
    colorSchemes: {
        light: {
            palette:{
                primary:{
                    main: "#6eaabb",
                    contrastText: "black"
                },
                secondary:{
                    main:"#064976",
                    contrastText: "#fcfbf0"

                },
                background:{
                    default:"#d4f3f8",
                    paper:"#9acfed"
                },
                text:{
                    primary: "#1b1c1e",
                    secondary: "#162d4a"
                },
                divider: "#99a8ca"
            }
        },

        dark: {
            palette:{
                palette: {
                    primary: {
                        main:"#3d9f91",
                        contrastText: "black"
                    },
                    secondary: {
                        main: "#37578e",
                        contrastText: "#feffea"
                    },
                    background:{
                        default: "#050d1c",
                        paper: "#232338"
                    },
                    text:{
                        primary:"#f7f8fa",
                        secondary:"#7bbeba"
                    },
                    divider: "#2a374b"
                }
            }
        }
    }
})

export {tema}