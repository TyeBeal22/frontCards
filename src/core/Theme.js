import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = "#d8ebb5"
const arcOrange = "#FFBA60"
const arcGrey = "#868686"


export default createMuiTheme({

  palette: {
    common: {
      arcBlue: `${arcBlue}`,
      arcOrange:`${arcOrange}`
    },
    primary: {
      main: `${arcBlue}`
    },
    secondary: {
      main: `${arcOrange}`
    }
  },
  typography: {
   tab: {
    fontFamily: "Roboto",
    textTransform: 'none',
    fontWeight: 700,
    fontSize: "1rem"
  },
  h2:{
    fontFamily: "Raleway",
    fontWeight: 700,
    fontSize: "3rem"
  },
  h4: {
    fontFamily: "Raleway",
    fotWeight: 700,
    fontSize: "2.5rem"
  },
  subtite1: {
    fontSize: "1.2rem",
    fontWeight: 300,
    color: `${arcGrey}`
  },
  subtitle2: {
    color: `${arcOrange}`,
    fontSize: "1.25rem",
    fontWeight: 300
  }

  }

});