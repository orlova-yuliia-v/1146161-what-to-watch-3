import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router} from "react-router-dom";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/state/state.js";
import {getPromoMovie} from "../../reducer/data/selectors.js";
import {getSelectedMovie} from "../../reducer/state/selectors.js";
import SignIn from "../sign-in/sign-in.jsx";
import AddReview from "../add-review/add-review.jsx";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import history from "../../history.js";
import {AppRoute} from "../../const.js";
import MyList from "../my-list/my-list.jsx";
import PrivateRoute from "../private-route/private-route.jsx";
import withPlayer from "../../hocs/with-full-video-player/with-full-video-player.jsx";
import FullVideoPlayer from "../full-video-player/full-video-player.jsx";
import withFormValidation from "../../hocs/with-form-validation/with-form-validation.jsx";

const FullVideoPlayerWrapped = withPlayer(FullVideoPlayer);
const AddReviewWrapped = withFormValidation(AddReview);

class App extends PureComponent {
  constructor(props) {
    super(props);

    this._handleCardClick = this._handleCardClick.bind(this);
  }

  _handleCardClick(selectedMovieId) {
    const {changeSelectedMovieId, getComments, selectedMovie} = this.props;
    if (selectedMovie && selectedMovie.id !== selectedMovieId) {
      changeSelectedMovieId(selectedMovieId);
      getComments(selectedMovieId);
    }
    history.push(`${AppRoute.FILMS}/${selectedMovieId}`);
  }

  render() {
    const {
      promoMovie,
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
              />
            )}
          />
          <Route
            exact
            path={`${AppRoute.FILMS}/:id`}
            render={(props) => (
              <MoviePage
                id={Number(props.match.params.id)}
                onMovieCardClick={this._handleCardClick}
              />
            )}
          />
          <PrivateRoute
            exact
            path={`${AppRoute.FILMS}/:id${AppRoute.ADD_REVIEW}`}
            render={(props) =>
              <AddReviewWrapped
                id={Number(props.computedMatch.params.id)}/>
            }
          />
          <Route
            exact
            path={`${AppRoute.FILMS}/:id${AppRoute.PLAYER}`}
            render={(props) => (
              <FullVideoPlayerWrapped
                {...props}
                onExitButtonClick={props.history.goBack}
                movie={selectedMovie || promoMovie}
                autoPlay={true}
              />
            )}
          />
          <Route
            exact
            path={AppRoute.LOGIN}
            render={(props) => (
              <SignIn goBack={props.history.goBack} onSubmit={login} />
            )}
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
  getComments: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  changeSelectedMovieId: PropTypes.func.isRequired,
  selectedMovie: PropTypes.shape()
};

const mapStateToProps = (state) => ({
  selectedMovie: getSelectedMovie(state),
  promoMovie: getPromoMovie(state),
  authorizationStatus: getAuthorizationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  changeSelectedMovieId(id) {
    dispatch(ActionCreator.changeSelectedMovieId(id));
  },
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
  getComments(id) {
    dispatch(DataOperation.getComments(id));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
