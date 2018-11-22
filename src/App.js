import React, { Component } from "react";
import "./App.css";
import MovieTemplate from "./components/MovieTemplate";
import axios from "axios";
const urlString =
  // "https://api.themoviedb.org/3/search/movie?api_key=b6cf942411531af0d1635061b75f82a6&language=ko-Kr&page=1&include_adult=true&query=" +
  // searchTerm;
  "https://api.themoviedb.org/3/discover/movie?api_key=b6cf942411531af0d1635061b75f82a6&language=ko-Kr&page=1&include_adult=true";

class App extends Component {
  componentDidMount() {
    this.getData();
  }

  state = {
    movies: []
  };

  getData = () => {
    axios
      .get(urlString)
      .then(response => {
        this.setState({
          movies: response.data.results
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { movies } = this.state;
    console.log(this.state);
    return (
      <div className="App">
        <MovieTemplate movies={movies} />
      </div>
    );
  }
}

export default App;
