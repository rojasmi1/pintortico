import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import amber from '@material-ui/core/colors/amber';
import CssBaseline from '@material-ui/core/CssBaseline';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#5e92f3',
      main: blue[700],
      dark: '#003c8f'
    },
    secondary: {
      light: '#ffff81',
      main: amber[300],
      dark: '#c8a415'
    },
    type: 'light'
  },
  typography: {
    fontFamily: 'Helvetica Neue, sans-serif, Arial, Alex Brush',
    headline: {
      fontFamily: 'Alex Brush',
      fontSize: 32,
      fontWeight: 700
    },
    title: {
      fontSize: 26,
      color: '#666'
    },
    body1: {
      color: '#666'
    }
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '0'
      }
    }
  }
});

function withRoot(Component) {
  function WithRoot(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
