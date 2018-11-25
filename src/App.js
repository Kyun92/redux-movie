import React, { Component } from "react";
import "./App.css";
import MovieTemplate from "./components/MovieTemplate";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as postAction from "./modules/post";


class App extends Component {
  loadData = async () => {
    const { PostAction, input } = this.props;
    try {
      const response = await PostAction.getPost(input);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.input !== prevProps.input) {
      this.loadData();
    }
  }

  render() {
    console.log(this.props);
    const { movies } = this.props;
    return (
      <div className="App">
        <MovieTemplate movies={movies} />
      </div>
    );
  }
}

export default connect(
  state => ({
    input: state.movie.input,
    movies: state.post.movies
  }),
  dispatch => ({
    PostAction: bindActionCreators(postAction, dispatch)
  })
)(App);
