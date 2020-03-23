import React from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';
import {connect} from "react-redux";
import withActiveMovieCard from "../../hocs/with-active-movie-card/with-active-movie-card.jsx";
import {getShowedMovies, getGenre} from "../../reducer/state/selectors.js";
import {getMoviesByGenre} from "../../reducer/data/selectors.js";


const SmallMovieCardtWrapped = withActiveMovieCard(SmallMovieCard);

const MoviesList = (props) => {
  const {movies, onMovieCardClick} = props;

  return (
    <div className="catalog__movies-list">
      {
        movies.map((movie, i) => {
          return (
            <SmallMovieCardtWrapped
              key={`movie-${i}`}
              movie={movie}
              onMovieCardClick={() => {
                onMovieCardClick(movie.id);
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
  onMovieCardClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  movies: getMoviesByGenre(state),
  selectedGenre: getGenre(state),
  showedMovies: getShowedMovies(state)
});

export {MoviesList};
export default connect(mapStateToProps)(MoviesList);
