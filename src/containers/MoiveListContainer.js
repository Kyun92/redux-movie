import React, { Component } from "react";
import { connect } from "react-redux";

// import * as postActions from "../modules/post";
import MovieCardList from "../components/MovieCardList";

class MoiveListContainer extends Component {
  render() {
    const { movies } = this.props;
    return <MovieCardList movies={movies} />;
  }
}

const mapStateTotprops = ({ post }) => ({
  movies: post.movies
});

export default connect(
  mapStateTotprops,
  null
)(MoiveListContainer);
