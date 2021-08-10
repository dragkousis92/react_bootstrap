import createTheme from '@material-ui/core/styles/createTheme';
import merge from 'lodash/merge';

import palette from './palette';
import typography from './typography';

const muiTheme = createTheme({
  props: {
    MuiWithWidth: {
      initialWidth: 'lg', // Breakpoint being globally set 🌎!
    },
    // MuiButtonBase: {
    //   disableRipple: true, // No more ripple, on the whole application 💣!
    // },
  },
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: { xs: 576, sm: 768, md: 992, lg: 1200, xl: 1320 },
  },
  typography: {
    useNextVariants: true,
  },
  palette,
});

// previous typography invocation: typography(muiTheme.typography)
muiTheme.typography = merge(
  muiTheme.typography,
  typography(muiTheme.breakpoints),
);

// Overrides
muiTheme.overrides = {
  MuiCssBaseline: {
    '@global': {
      '@font-face': [],
    },
  },
};

export default muiTheme;
