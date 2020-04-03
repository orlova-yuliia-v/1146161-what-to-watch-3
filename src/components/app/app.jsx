import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router} from "react-router-dom";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/state/state.js";
import {getPromoMovie} from "../../reducer/data/selectors.js";
import {isFullVideoPlayer, getSelectedMovie} from "../../reducer/state/selectors.js";
import SignIn from "../sign-in/sign-in.jsx";
import AddReview from "../add-review/add-review.jsx";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import history from "../../history.js";
import {AppRoute} from "../../const.js";
import MyList from "../my-list/my-list.jsx";
import PrivateRoute from "../private-route/private-route.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this._handleCardClick = this._handleCardClick.bind(this);
  }

  _handleCardClick(selectedMovieId) {
    this.props.changeSelectedMovieId(selectedMovieId);
    this.props.getComments(selectedMovieId);
    history.push(`${AppRoute.FILMS}/${selectedMovieId}`);
  }

  render() {
    const {
      promoMovie,
      isFullVideoPlayerVisible,
      onVisibilityChange,
      selectedMovie,
      login
    } = this.props;

    return (
      <Router history={history}>
        <Switch>
          <Route
            exact
            path={AppRoute.ROOT}
            render={() => (
              <Main
                promoMovie={promoMovie}
                onMovieCardClick={this._handleCardClick}
                isFullVideoPlayerVisible={isFullVideoPlayerVisible}
                onVisibilityChange={onVisibilityChange}
              />
            )}
          />
          <Route
            exact
            path={`${AppRoute.FILMS}/:id`}
            render={() => (
              <MoviePage
                movie={selectedMovie}
                onMovieCardClick={this._handleCardClick}
                isFullVideoPlayerVisible={isFullVideoPlayerVisible}
                onVisibilityChange={onVisibilityChange}
              />
            )}
          />
          <PrivateRoute
            exact
            path={`${AppRoute.FILMS}/:id${AppRoute.ADD_REVIEW}`}
            render={() => <AddReview />}
          />
          <Route
            exact
            path={AppRoute.LOGIN}
            render={(props) => <SignIn {...props} onSubmit={login} />}
          />
          <PrivateRoute
            exact
            path={AppRoute.MY_LIST}
            render={() => (
              <MyList
                onMovieCardClick={this._handleCardClick} />
            )}
          />
        </Switch>
      </Router>
    );
  }
}


App.propTypes = {
  promoMovie: PropTypes.shape().isRequired,
  onVisibilityChange: PropTypes.func.isRequired,
  isFullVideoPlayerVisible: PropTypes.bool.isRequired,
  getComments: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  changeSelectedMovieId: PropTypes.func.isRequired,
  selectedMovie: PropTypes.shape()
};

const mapStateToProps = (state) => ({
  isFullVideoPlayerVisible: isFullVideoPlayer(state),
  selectedMovie: getSelectedMovie(state),
  promoMovie: getPromoMovie(state),
  authorizationStatus: getAuthorizationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onVisibilityChange() {
    dispatch(ActionCreator.changeVisibility());
  },
  changeSelectedMovieId(id) {
    dispatch(ActionCreator.changeSelectedMovieId(id));
  },
  login(authData) {
    dispatch(UserOperation.login(authData));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
