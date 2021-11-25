import { createTheme } from "@mui/material";

const textColor = '#58A5FE';
const secondaryColor = '#0D1117';
// const white = '#000000';

const theme = createTheme({
    palette: {
        primary: {
            main: textColor,
        },
        secondary: {
            main: textColor,
        }
    },

    shape: {
        borderRadius: 5
    },

    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    color: '#FFFFFF',
                    padding: '0px',
                    backgroundColor: '#0D1117'
                }
            }
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    color: secondaryColor,
                    fontWeight: 700
                }
            }
        }
    }
})

export default theme;