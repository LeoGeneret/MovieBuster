import React from "react";
import "./App.css";
import Header from "./Header.js";
import Questions from "./Questions";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      genre: "",
      pays: "",
      epoque: "",
      filmsResults: []
    };
  }

  handleChange = e => {
    this.setState({
      genre: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    var genreNumber = this.state.genre;
    var pays = this.state.pays;
    var epoque = this.state.epoque;
    var imageURL = "http://image.tmdb.org/t/p/w500/";
    var filmURL = "https://www.themoviedb.org/movie/"
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=00d3862837b278c00036b0c34b9be79d&language=fr-FR&sort_by=popularity.desc&with_genres=" +
        genreNumber +
        "&with_runtime.lte=" +
        pays +
        epoque
    )
      .then(results => {
        return results.json();
      })
      .then(data => {
        let filmsResults = data.results.map(films => {
          return (
            <a href={filmURL + films.id} target="_blank" rel="noopener noreferrer">
            <div className="cardresult" key={films.results}>
              <img src={imageURL + films.poster_path} alt="" />
              <div className="filmInfos">
                <div className="cardheader">
                  <p>{films.title}</p> 
                  <p>{films.vote_average}</p>
                </div>
                
              </div>
            </div>
            </a>
          );
        });
        this.setState({
          filmsResults: filmsResults
        });
        console.log("state", this.state.filmsResults);
      });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Questions
          className="questions"
          onSubmit={this.handleSubmit}
          onChangeGenre={e => this.setState({ genre: e.target.value })}
          onChangePays={e => this.setState({ pays: e.target.value })}
          onChangeEpoque={e => this.setState({ epoque: e.target.value })}
        />

        <div className="resultcontainer">{this.state.filmsResults}</div>
      </div>
    );
  }
}

export default App;
