import React from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';
import {connect} from "react-redux";
import {ALL_GENRES} from "../../const.js";
import withActiveMovieCard from "../../hocs/with-active-movie-card/with-active-movie-card.jsx";

const SmallMovieCardtWrapped = withActiveMovieCard(SmallMovieCard);

const MoviesList = (props) => {
  const {movies, onMovieTitleClick} = props;

  return (
    <div className="catalog__movies-list">
      {
        movies.map((movie, i) => {
          return (
            <SmallMovieCardtWrapped
              key={`movie-${i}`}
              movie={movie}
              onMovieTitleClick={() => {
                onMovieTitleClick(movie);
              }}
            />
          );
        })
      }
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  })
  ),
  onMovieTitleClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  movies: state.selectedGenre === ALL_GENRES ?
    state.movies.slice(0, state.showedMovies) :
    state.movies.filter((movie) => movie.genre === state.selectedGenre).slice(0, state.showedMovies),
  selectedGenre: state.selectedGenre,
  showedMovies: state.showedMovies
});

export {MoviesList};
export default connect(mapStateToProps)(MoviesList);
