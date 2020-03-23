import React from "react";
import PropTypes from "prop-types";
import {ALL_GENRES} from "../../const.js";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/state/state.js";
import {getGenre} from "../../reducer/state/selectors.js";
import {getMovies} from "../../reducer/data/selectors.js";

const MAX_GENRES_NUMBER = 10;

const getGenresList = (movies) => {
  return [ALL_GENRES, ...new Set(movies.map(({genre}) => genre))].slice(0, MAX_GENRES_NUMBER);
};

const GenresList = (props) => {
  const {movies, selectedGenre, changeGenre, resetShowedMoviesAmount} = props;

  return (
    <ul className="catalog__genres-list">
      {getGenresList(movies).map((availableGenre, index) => (
        <li
          key={availableGenre + index}
          className={`catalog__genres-item ${selectedGenre === availableGenre ? `catalog__genres-item--active` : ``}`}
        >
          <a
            href="#"
            className="catalog__genres-link"
            onClick={() => {
              changeGenre(availableGenre);
              resetShowedMoviesAmount();
            }}
          >
            {availableGenre}
          </a>
        </li>
      ))}
    </ul>
  );
};


GenresList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    genre: PropTypes.string.isRequired})),
  selectedGenre: PropTypes.string.isRequired,
  changeGenre: PropTypes.func.isRequired,
  resetShowedMoviesAmount: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  movies: getMovies(state),
  selectedGenre: getGenre(state)
});

const mapDispatchToProps = (dispatch) => ({
  changeGenre(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },

  resetShowedMoviesAmount() {
    dispatch(ActionCreator.resetShowedMoviesAmount());
  }
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
