import muiTheme from './muiTheme';

const theme = {
  ...muiTheme,
  app: {
    headerHeight: 72,
    truncate: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },
  // You can add here any values or utility functions you might need for styling your components
};

export default theme;
