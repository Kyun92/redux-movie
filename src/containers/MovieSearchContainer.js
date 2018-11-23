import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as movieActions from "../modules/movie";
import MovieSearchBar from "../components/MovieSearchBar";

class MovieSearchContainer extends Component {
  handleChange = e => {
    const { movieActions } = this.props;
    movieActions.changeInput(e.target.value);
  };

  render() {
    const { input } = this.props;
    return <MovieSearchBar input={input} onChange={this.handleChange} />;
  }
}
const mapStateToProps = ({ movie }) => ({
  input: movie.input
});

const mapDispatchToProps = dispatch => ({
  movieActions: bindActionCreators(movieActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieSearchContainer);
