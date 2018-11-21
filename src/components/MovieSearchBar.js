import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  }
});

const MovieSearchBar = props => {
  const { classes } = props;

  return (
    <Paper className={classes.paper}>
      <form>
        <FormControl fullWidth>
          <InputLabel htmlFor="search">Search...</InputLabel>
          <Input id="search" name="search" />
        </FormControl>
      </form>
    </Paper>
  );
};

MovieSearchBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MovieSearchBar);
