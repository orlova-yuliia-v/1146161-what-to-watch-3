import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import MovieDetails from "../movie-details/movie-details.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedFilm: null
    };

    this._handleTitleClick = this._handleTitleClick.bind(this);
  }

  _handleTitleClick(film) {
    this.setState(
        {selectedFilm: film}
    );
  }

  _renderApp() {
    const {promoTitle, promoGenre, promoYear, films} = this.props;
    const {selectedFilm} = this.state;

    if (selectedFilm) {
      return <MovieDetails film={selectedFilm} />;
    }

    return (
      <Main
        promoTitle={promoTitle}
        promoGenre={promoGenre}
        promoYear={promoYear}
        onMovieTitleClick={this._handleTitleClick}
        films={films} />);
  }

  render() {
    const {selectedFilm} = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-film-details">
            {selectedFilm ? <MovieDetails film={selectedFilm}/> : null}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}


App.propTypes = {
  promoTitle: PropTypes.string.isRequired,
  promoGenre: PropTypes.string.isRequired,
  promoYear: PropTypes.number.isRequired,
  films: PropTypes.arrayOf.isRequired
};

export default App;
