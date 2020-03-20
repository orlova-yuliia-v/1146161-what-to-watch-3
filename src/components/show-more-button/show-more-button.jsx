import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/state/state.js";

const ShowMoreButton = (props) => {
  const {movies, showedMovies, showMoreMovies} = props;

  return (
    showedMovies < movies.length ? (
      <div className="catalog__more">
        <button
          className="catalog__button"
          type="button"
          onClick={showMoreMovies}
        >
        Show more
        </button>
      </div>
    )
      : null
  );
};

ShowMoreButton.propTypes = {
  movies: PropTypes.array.isRequired,
  showedMovies: PropTypes.number.isRequired,
  showMoreMovies: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  movies: state.movies,
  showedMovies: state.showedMovies
});

const mapDispatchToProps = (dispatch) => ({
  showMoreMovies() {
    dispatch(ActionCreator.showMoreMovies());
  }
});

export {ShowMoreButton};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreButton);
