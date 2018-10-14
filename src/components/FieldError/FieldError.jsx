import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    minHeight: 30
  },
  errorText: {
    color: theme.palette.common.error,
    fontWeight: 600
  }
});

const FieldError = props => {
  const { classes, hasErrors, children } = props;
  return (
    <div className={classes.root}>
      {hasErrors ? (
        <Typography className={classes.errorText}>{children}</Typography>
      ) : null}
    </div>
  );
};

export default withStyles(styles)(FieldError);
