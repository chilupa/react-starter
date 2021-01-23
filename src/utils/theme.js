import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

const theme = responsiveFontSizes(
  createMuiTheme({
    // palette: {
    //   primary: {
    //     main: '#009688',
    //     light: '#52c7b8',
    //     dark: '#00675b',
    //   },
    //   secondary: {
    //     main: '#212121',
    //     light: '#484848',
    //     dark: '#000000',
    //   },
    // },
    typography: {
      fontFamily: [
        'Lato',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  })
);

export default theme;
