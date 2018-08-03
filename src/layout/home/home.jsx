import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import MediaCard from '../../components/mediaCard';

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
    const {
      bio_image: bioImage,
      meet_me: meetMeImage,
      gallery: galleryImage,
      events: eventsImage
    } = this.props.baseImages;

    return (
      <section>
        <Grid container spacing={40} justify="center" alignItems="center">
          <Grid item xs={12} md={5} sm={5}>
            {bioImage ? (
              <img
                className={classes.bioImage}
                src={bioImage.src}
                alt={bioImage.alt}
              />
            ) : null}
          </Grid>
          <Grid item xs={12} md={5} sm={7}>
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

          <Grid item xs={12} sm={4}>
            <MediaCard
              img={meetMeImage}
              title="Meet me"
              content="Max grew up surrounded by nature, nature that is reflected in his work. Apart from being an artist, he has an studio where he helps others become one."
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <MediaCard
              img={galleryImage}
              title="Gallery"
              content="Interested in seeing part of his job? The gallery will walk you through his most popular paintings, as well as some of his scultures and crafted tools."
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <MediaCard
              img={eventsImage}
              title="Events"
              content="Want to see Max's expositions? Take a look at the upcomming events and don't miss the change to assist!"
            />
          </Grid>
        </Grid>
      </section>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Home);
