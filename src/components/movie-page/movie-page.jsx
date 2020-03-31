import React from "react";
import PropTypes from "prop-types";
import {MoviesList} from "../movies-list/movies-list.jsx";
import Tabs from "../tabs/tabs.jsx";
import withActiveMovieCard from "../../hocs/with-active-movie-card/with-active-movie-card.jsx";
import withActiveTab from '../../hocs/with-active-tab/with-active-tab.jsx';
import FullVideoPlayer from "../full-video-player/full-video-player.jsx";
import withFullVideoPlayer from "../../hocs/with-full-video-player/with-full-video-player.jsx";
import {getSimilarMovies} from "../../reducer/state/selectors.js";
import {connect} from "react-redux";
import {getAuthorizationStatus, getAuthUser} from "../../reducer/user/selectors.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const.js";

const MoviesListWrapped = withActiveMovieCard(MoviesList);
const TabsWrapped = withActiveTab(Tabs);
const FullVideoPlayerWrapped = withFullVideoPlayer(FullVideoPlayer);

const MoviePage = ({movies, movie, onMovieCardClick, isFullVideoPlayerVisible, onVisibilityChange, authorizationStatus, authUserData}) => {
  const {title, poster, bgPosterUrl, genre, releaseYear} = movie;

  return isFullVideoPlayerVisible ? (
    <FullVideoPlayerWrapped
      onExitButtonClick={onVisibilityChange}
      movie={movie}
      autoPlay={true}
    />
  ) : (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={bgPosterUrl} alt={title}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <Link to={AppRoute.ROOT} className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                {authorizationStatus === AuthorizationStatus.AUTH ? (
                  <div className="user-block__avatar">
                    <img
                      src={`https://htmlacademy-react-3.appspot.com/${authUserData.avatarUrl}`}
                      alt={authUserData.name}
                      width="63"
                      height="63"
                    />
                  </div>
                ) : (
                  <Link to={AppRoute.LOGIN} className="user-block__link">
                Sign in
                  </Link>
                )}
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{releaseYear}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button" onClick={onVisibilityChange}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                {authorizationStatus === AuthorizationStatus.AUTH && (
                  <Link to={AppRoute.ADD_REVIEW} className="btn movie-card__button">
                    Add review
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={poster} alt={title} width="218" height="327" />
            </div>
            <TabsWrapped movie={movie} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoviesListWrapped
            movies={movies}
            onMovieCardClick={onMovieCardClick}
          />
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to={AppRoute.ROOT} className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

MoviePage.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    bgPosterUrl: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired
  }).isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    bgPosterUrl: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired
  })).isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
  onVisibilityChange: PropTypes.func.isRequired,
  isFullVideoPlayerVisible: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  authUserData: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string,
    avatarUrl: PropTypes.string
  })
};

const mapStateToProps = (state) => ({
  movies: getSimilarMovies(state),
  authorizationStatus: getAuthorizationStatus(state),
  authUserData: getAuthUser(state)
});

export default connect(mapStateToProps)(MoviePage);

