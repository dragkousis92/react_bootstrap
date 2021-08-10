import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import withStyles from '@material-ui/core/styles/withStyles';

// import withUISetup from './withUISetup';

import theme from './theme';
import styles from './styles';

type UISetupStylesProps = {
  classes: Object,
  children: HTMLElement | Object | [],
};

const UISetupStyles = withStyles(styles)(
  ({ classes, children }: UISetupStylesProps) => (
    <>
      <CssBaseline />
      <div className={classes.container}>{children}</div>
    </>
  ),
);

type UISetupProps = {
  children: HTMLElement | Object | [],
};

const UISetup = ({ children }: UISetupProps) => (
  <ThemeProvider theme={theme}>
    <UISetupStyles>{children}</UISetupStyles>
  </ThemeProvider>
);

UISetup.defaultProps = {};

export default UISetup;
