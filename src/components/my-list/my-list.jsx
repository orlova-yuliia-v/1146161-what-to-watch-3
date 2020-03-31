import React from "react";
import MoviesList from "../movies-list/movies-list.jsx";
import withActiveMovieCard from "../../hocs/with-active-movie-card/with-active-movie-card.jsx";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {AppRoute} from "../../utils/constants";

const MoviesListWrapped = withActiveMovieCard(MoviesList);

const MyList = ({onMovieCardClick, movies, authUserData}) => {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={AppRoute.ROOT} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <div className="user-block">
          <div className="user-block__avatar">
            <img
              src={`https://htmlacademy-react-3.appspot.com/${authUserData.avatarUrl}`}
              alt={authUserData.name}
              width="63"
              height="63"
            />
          </div>
        </div>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MoviesListWrapped onMovieCardClick={onMovieCardClick} movies={movies} />
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
  );
};

MyList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
  authUserData: PropTypes.shape({
    name: PropTypes.string,
    avatarUrl: PropTypes.string
  })
};

export default MyList;
