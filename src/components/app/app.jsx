import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/state/state.js";
import {getPromoMovie} from "../../reducer/data/selectors.js";
import {isFullVideoPlayer, getSelectedMovie} from "../../reducer/state/selectors.js";
import SignIn from "../sign-in/sign-in.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this._handleCardClick = this._handleCardClick.bind(this);
  }

  _handleCardClick(selectedMovieId) {
    this.props.changeSelectedMovieId(selectedMovieId);
    this.props.getComments(selectedMovieId);
  }

  _renderApp() {
    const {promoMovie, isFullVideoPlayerVisible, onVisibilityChange, selectedMovie} = this.props;

    if (selectedMovie) {
      return (
        <MoviePage
          movie={selectedMovie}
          onMovieCardClick={this._handleCardClick}
          isFullVideoPlayerVisible={isFullVideoPlayerVisible}
          onVisibilityChange={onVisibilityChange}
        />
      );
    }
    return (
      <Main
        promoMovie={promoMovie}
        onMovieCardClick={this._handleCardClick}
        isFullVideoPlayerVisible={isFullVideoPlayerVisible}
        onVisibilityChange={onVisibilityChange}
      />
    );
  }

  render() {
    const {isFullVideoPlayerVisible, onVisibilityChange, selectedMovie} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-sign-in">
            <SignIn />
          </Route>
          <Route exact path="/dev-film-page">
            {selectedMovie ?
              <MoviePage
                movie={selectedMovie}
                onMovieCardClick={this._handleCardClick}
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
  promoMovie: PropTypes.shape().isRequired,
  onVisibilityChange: PropTypes.func.isRequired,
  isFullVideoPlayerVisible: PropTypes.bool.isRequired,
  getComments: PropTypes.func.isRequired,
  changeSelectedMovieId: PropTypes.func.isRequired,
  selectedMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
    bgPosterUrl: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ratingScore: PropTypes.number.isRequired,
    ratingCount: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    runTime: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    videoUrl: PropTypes.string.isRequired,
  })
};

const mapStateToProps = (state) => ({
  isFullVideoPlayerVisible: isFullVideoPlayer(state),
  selectedMovie: getSelectedMovie(state),
  promoMovie: getPromoMovie(state)
});

const mapDispatchToProps = (dispatch) => ({
  onVisibilityChange() {
    dispatch(ActionCreator.changeVisibility());
  },
  changeSelectedMovieId(id) {
    dispatch(ActionCreator.changeSelectedMovieId(id));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
