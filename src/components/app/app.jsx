import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import MovieDetails from "../movie-details/movie-details.jsx";

const movieTitleClickHandler = () => {};

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {promoTitle, promoGenre, promoYear, films} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main
              promoTitle={promoTitle}
              promoGenre={promoGenre}
              promoYear={promoYear}
              onMovieTitleClick={movieTitleClickHandler}
              films={films} />
          </Route>
          <Route exact path="/dev-film-details">
            <MovieDetails />
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
  films: PropTypes.array.isRequired
};

export default App;
