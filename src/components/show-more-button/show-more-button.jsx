import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";

const ShowMoreButton = (props) => {
  const {films, showedMovies, showMoreMovies} = props;

  return (
    showedMovies < films.length ? (
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
  films: PropTypes.array.isRequired,
  showedMovies: PropTypes.number.isRequired,
  showMoreMovies: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  films: state.films,
  showedMovies: state.showedMovies
});

const mapDispatchToProps = (dispatch) => ({
  showMoreMovies() {
    dispatch(ActionCreator.showMoreMovies());
  }
});

export {ShowMoreButton};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreButton);
