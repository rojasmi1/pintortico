import React, { Component } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  bioImage: {
    width: '100%',
    height: 'auto'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'justify',
    color: theme.palette.text.secondary
  }
});

class Home extends Component {
  render() {
    const { classes } = this.props;
    let resultData;
    const bioImage = this.props.baseImages
      ? this.props.baseImages.bio_image
      : null;

    if (!this.props.isLoading) {
      resultData = (
        <Grid container spacing={40}>
          <Grid item xs={12} sm={1} />
          <Grid item xs={12} sm={5}>
            {bioImage ? (
              <img
                className={classes.bioImage}
                src={bioImage.src}
                alt={bioImage.meta.alt}
              />
            ) : null}
          </Grid>
          <Grid item xs={12} sm={5}>
            <Paper className={classes.paper}>
              <Typography variant="subheading" component="h3">
                Bio
              </Typography>
              <br />
              <Typography component="p">
                <b>Max Rojas Vargas</b> was born and raised in a rural farming
                village in the province of Cartago, Costa Rica.
                <br />
                <br />
                His formal studies Max received at the University of Costa Rica,
                thus beginning his immersion into the world of art. Rojas, one
                of Costa Ric's established watercolorists, immerses himself in
                his environment and transposes this experience to paper or
                canvas. The viewer is able to feel the humidity of the swollen
                clouds, the crispness of the first steam of light after the
                storm breaks, swirling hues caught in nature's phenomena.
                <br />
                <br />
                Max's acrylics are vigorous, energy-charged renditions conscious
                of space, surface and color of Costa Rica. Rojas also forges
                metal, carves in wood and weaves on looms he builds himself;
                total corporal involvement that creates art full of activity, be
                it conceptual or physical.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      );
    }
    return <section>{resultData}</section>;
  }
}

export default withStyles(styles, { withTheme: true })(Home);
