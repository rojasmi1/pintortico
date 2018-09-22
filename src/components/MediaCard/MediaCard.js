import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  cardContent: {
    minHeight: 190
  },
  media: {
    height: 0,
    paddingTop: '30%' // 16:9
  },
  cardActions: {
    justifyContent: 'center',
    paddingBottom: theme.spacing.unit * 3
  }
});

function MediaCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        {props.img && (
          <CardMedia
            className={classes.media}
            image={props.img.src}
            title={props.img.alt}
          />
        )}
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="title" component="h2">
            {props.title}
          </Typography>
          <Typography component="p">{props.content}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size="small" variant="contained" color="secondary">
            Read More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(MediaCard);
