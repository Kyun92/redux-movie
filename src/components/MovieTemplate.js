import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import MovieSearchBar from "./MovieSearchBar";
import Grid from "@material-ui/core/Grid";
import MovieCardList from "./MovieCardList";

const MovieTemplate = ({ movies, value }) => {
  return (
    <div>
      <CssBaseline />
      <Grid container justify="center" alignItems="center">
        <Grid item xs={9}>
          <MovieSearchBar />
        </Grid>
      </Grid>
      <MovieCardList movies={movies} />
    </div>
  );
};

export default MovieTemplate;
