import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    // custom theme options
    palette: {
        // custom palette options
        primary: {
            main: '#23A6F0',
            //  add light, dark, contrastText if needed
        },
        secondary: {
            main: '#23856D',
        },
    },
});

export default theme;