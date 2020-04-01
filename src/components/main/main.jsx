import React from "react";
import PropTypes from "prop-types";
import MoviesList from '../movies-list/movies-list.jsx';
import GenresList from '../genres-list/genres-list.jsx';
import ShowMoreButton from "../show-more-button/show-more-button.jsx";
import FullVideoPlayer from "../full-video-player/full-video-player.jsx";
import withFullVideoPlayer from "../../hocs/with-full-video-player/with-full-video-player.jsx";
import {getPromoMovie} from "../../reducer/data/selectors.js";
import {connect} from "react-redux";
import {getAuthorizationStatus, getAuthUser} from "../../reducer/user/selectors.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";

const FullVideoPlayerWrapped = withFullVideoPlayer(FullVideoPlayer);

const Main = (props) => {
  const {
    promoMovie,
    onMovieCardClick,
    isFullVideoPlayerVisible,
    onVisibilityChange,
    authorizationStatus,
    authUserData,
    addMovieToMyList,
    removeMovieFromMyList} = props;

  return (
    isFullVideoPlayerVisible ? (
      <FullVideoPlayerWrapped
        onExitButtonClick={onVisibilityChange}
        movie={promoMovie}
        autoPlay={true}
      />
    ) : (<React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img
            src={promoMovie.bgPosterUrl}
            alt={promoMovie.title}
          />
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
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img
                src={promoMovie.poster}
                alt={promoMovie.title}
                width="218"
                height="327"
              />
            </div>

            <div className="movie-card__desc">
              <h2
                className="movie-card__title">{promoMovie.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{promoMovie.genre}</span>
                <span className="movie-card__year">{promoMovie.releaseYear}</span>
              </p>

              <div className="movie-card__buttons">
                <button
                  className="btn btn--play movie-card__button"
                  type="button"
                  onClick={onVisibilityChange}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list movie-card__button"
                  type="button"
                  onClick={() => {
                    if (promoMovie.isFavorite) {
                      removeMovieFromMyList(promoMovie.id);
                    } else {
                      addMovieToMyList(promoMovie.id);
                    }
                  }}
                >
                  {promoMovie.isFavorite ? (
                    <svg viewBox="0 0 18 14" width="18" height="14">
                      <use xlinkHref="#in-list"></use>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                  )}
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList />
          <MoviesList
            onMovieCardClick={onMovieCardClick}
          />
          <ShowMoreButton />
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
    ));
};
Main.propTypes = {
  promoMovie: PropTypes.shape().isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
  onVisibilityChange: PropTypes.func.isRequired,
  isFullVideoPlayerVisible: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  authUserData: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string,
    avatarUrl: PropTypes.string
  }),
  addMovieToMyList: PropTypes.func.isRequired,
  removeMovieFromMyList: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  promoMovie: getPromoMovie(state),
  authorizationStatus: getAuthorizationStatus(state),
  authUserData: getAuthUser(state)
});

const mapDispatchToProps = (dispatch) => ({
  addMovieToMyList(id) {
    dispatch(DataOperation.addMovieToMyList(id));
  },
  removeMovieFromMyList(id) {
    dispatch(DataOperation.removeMovieFromMyList(id));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Main);
