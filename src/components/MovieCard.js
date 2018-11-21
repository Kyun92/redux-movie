import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { CardActionArea } from "@material-ui/core";

const styles = {
  cardMedia: {
    paddingTop: "56.25%",
    height: "325px",
    backgroundSize: "contain"
    // 16:9,
  },
  cardContent: {
    flexGrow: 1
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  }
};

const MediaCard = ({ classes, movie, key }) => {
  const { title, poster_path } = movie;
  const poster_src = `https://image.tmdb.org/t/p/w185/${poster_path}`;
  return (
    <Grid item sm={6} md={4} lg={3}>
      <CardActionArea>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            src={poster_src}
            image={poster_src}
            title={title}
          />

          <CardContent className={classes.cardContent}>
            <p>
              <b>{title}</b>
            </p>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
};

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
