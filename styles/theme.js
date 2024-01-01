import { createTheme } from '@mui/material/styles';
import { breakpoints } from './constant';


let theme = createTheme();

theme = createTheme(theme, {
  breakpoints,
   palette: {
    mode: "light",
    default: {
      main: "#404040",
      light: "#0066FF",
      contrastText: "#ffffff",
    },
    primary: {
      main: "#4A9088",
      light: "#D4DAE8",
      dark: "#4A9088",
      contrastText: '#FFFFFF'
    },

    secondary: {
      main: "#F55C38",
      light: "#FDDED7",
      dark: "#933722",
      contrastText: "#ffffff",
    },

    pink: {
      main: "#F091B2",
      light: "#FCE9F0",
      dark: "#90576B",
      contrastText: "#ffffff",
    },

    typhoon: {
      main: "#049796",
      light: "#CDEAEA",
      dark: "#025B5A",
      contrastText: "#ffffff",
    },

    orange: {
      main: "#FFAD33",
      light: "#FFEFD6",
      dark: "#99681F",
      contrastText: "#2E2E2E",
    },

    twilight: {
      main: "#FFF2F2",
      light: "#FFF7F7",
      dark: "#999191",
      contrastText: "#ffffff",
    },

    error: {
      main: "#F44336",
      light: "#FFE5E3",
      dark: "#C3362B",
      contrastText: "#ffffff",
    },

    success: {
      main: "#219464",
      light: "#E9F5E9",
      dark: "#3A8137",
      contrastText: "#ffffff",
    },

    Grey: {
      main: "#949494",
      light: "#DEDEDE",
      contrastText: "#ffffff",
    },

    text: {
      primary: "#2E2E2E",
      secondary: "#6D6D6D",
      disabled: "#BDBDBD",
      hint: "#BDBDBD",
    },

    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
    black: {
      main: "#2E2E2E",
      contrastText: "#FFFFFF",
    },
    divider: "#949494",
  },
  typography: {
    fontFamily: ['Raleway', 'Noto Sans', 'Alice', 'Nunito Sans', 'sans-serif'].join(','),
    h3:{
        fontFamily: 'Alice',
        [theme.breakpoints.down("sm")]: {
          fontSize: "30px",
        },
        fontSize: '56px',
        fontWeight: 400,
        lineHeight: '84px',
        letterSpacing: '0em',
    },
    h4: {
      fontFamily: 'Alice',
      fontSize: '42px',
      fontWeight: 400,
      lineHeight: '63px',
      letterSpacing: '0px',
    },
    h6:{
      fontFamily: 'Nunito Sans',
      fontSize: '18px',
      fontWeight: 700,
      lineHeight: '28px',
      letterSpacing: '0px',
    },
    subtitle1: {
        fontFamily: "Raleway",
        fontSize: "18px",
        fontWeight: 700,
        lineHeight: "31px",
        letterSpacing: 0,
    },
    body1: {
        fontFamily: "Raleway",
        fontSize: "18px",
        fontWeight: 400,
        lineHeight: "31px",
        letterSpacing:'0px',
    },
    body2: {
        fontFamily: "Noto Sans",
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "24px",
        letterSpacing:'0px',

    },
    caption: {
        fontFamily: "Noto Sans",
        fontSize: "12px",
        fontWeight: 400,
        lineHeight: "18px",
        letterSpacing: 0,
    },
    button: {
        fontFamily: "Raleway",
        fontSize: "18px",
        fontWeight: 700,
        lineHeight: "31px",
        letterSpacing: 0,
      
      },
      
  },
  
});

theme.components = {
  MuiButton: {
    styleOverrides: {
      root: {
        width: '280px',
        height: '48px',
        padding: '8px 16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px',
        flexShrink: 0,
        textTransform: 'capitalize',
        '&:hover': {
          backgroundColor: `${theme.palette.primary.dark} !important`,
        },
      },
      },
  }, 
};

export default theme;
