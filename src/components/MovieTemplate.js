import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";

import MovieSearchContainer from "../containers/MovieSearchContainer";
import MoiveListContainer from "../containers/MoiveListContainer";

const MovieTemplate = ({ movies }) => {
  return (
    <div>
      <CssBaseline />
      <Grid container justify="center" alignItems="center">
        <Grid item xs={9}>
          <MovieSearchContainer />
        </Grid>
      </Grid>
      <MoiveListContainer />
    </div>
  );
};

export default MovieTemplate;
