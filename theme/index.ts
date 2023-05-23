import { createTheme } from '@mui/material/styles';

const appTheme = createTheme({
  typography: {
    fontFamily: 'Poppins, Roboto',
  },
  palette: {
    mode: 'dark',
    primary: {
      main: "#27EBE4",
    },
    itemBackground: {
      main: "#3C3C3C",
    }
  },
});

export default appTheme;