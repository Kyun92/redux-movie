import React from "react";
import MovieCard from "./MovieCard";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  }
});

const MovieCardList = ({ classes, movies }) => {
  const cardBox = movies.map(movie => (
    <MovieCard movie={movie} key={movie.id} />
  ));
  return (
    <div className={classNames(classes.layout, classes.cardGrid)}>
      {/* End hero unit */}
      <Grid container spacing={24}>
        {cardBox}
      </Grid>
    </div>
  );
};

export default withStyles(styles)(MovieCardList);
