import React from "react";
import PropTypes from "prop-types";
import {ALL_GENRES} from "../../const.js";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/state/state.js";

const MAX_GENRES_NUMBER = 10;

const getGenresList = (films) => {
  return [ALL_GENRES, ...new Set(films.map(({genre}) => genre))].slice(0, MAX_GENRES_NUMBER);
};

const GenresList = (props) => {
  const {films, selectedGenre, changeGenre, resetShowedMoviesAmount} = props;

  return (
    <ul className="catalog__genres-list">
      {getGenresList(films).map((availableGenre, index) => (
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
  films: PropTypes.arrayOf(PropTypes.shape({
    genre: PropTypes.string.isRequired})),
  selectedGenre: PropTypes.string.isRequired,
  changeGenre: PropTypes.func.isRequired,
  resetShowedMoviesAmount: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  films: state.films,
  selectedGenre: state.selectedGenre
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
