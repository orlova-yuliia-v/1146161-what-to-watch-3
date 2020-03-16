import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";

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
    const {promoFilm, films, isFullVideoPlayerVisible, onVisibilityChange} = this.props;
    const {selectedFilm} = this.state;

    if (selectedFilm !== null) {
      return (
        <MoviePage
          film={selectedFilm}
          onMovieTitleClick={this._handleTitleClick}
          isFullVideoPlayerVisible={isFullVideoPlayerVisible}
          onVisibilityChange={onVisibilityChange}
        />
      );
    }
    return (
      <Main
        promoFilm={promoFilm}
        films={films}
        onMovieTitleClick={this._handleTitleClick}
        isFullVideoPlayerVisible={isFullVideoPlayerVisible}
        onVisibilityChange={onVisibilityChange}
      />
    );
  }

  render() {
    const {selectedFilm} = this.state;
    const {isFullVideoPlayerVisible, onVisibilityChange} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-film-page">
            {selectedFilm ?
              <MoviePage
                film={selectedFilm}
                onMovieTitleClick={this._handleTitleClick}
                isFullVideoPlayerVisible={isFullVideoPlayerVisible}
                onVisibilityChange={onVisibilityChange}
              /> :
              null}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}


App.propTypes = {
  promoFilm: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    bgPosterUrl: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired
  }).isRequired,
  films: PropTypes.array.isRequired,
  onVisibilityChange: PropTypes.func.isRequired,
  isFullVideoPlayerVisible: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  isFullVideoPlayerVisible: state.isFullVideoPlayerVisible
});

const mapDispatchToProps = (dispatch) => ({
  onVisibilityChange() {
    dispatch(ActionCreator.changeVisibility());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
