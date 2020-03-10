import React from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';
import {connect} from "react-redux";
import {ALL_GENRES} from "../../const.js";
import withActiveMovieCard from "../../hocs/with-active-movie-card/with-active-movie-card.jsx";

const SmallMovieCardtWrapped = withActiveMovieCard(SmallMovieCard);

const MoviesList = (props) => {
  const {films, onMovieTitleClick} = props;

  return (
    <div className="catalog__movies-list">
      {
        films.map((film, i) => {
          return (
            <SmallMovieCardtWrapped
              key={`film-${i}`}
              film={film}
              onMovieTitleClick={() => {
                onMovieTitleClick(film);
              }}
            />
          );
        })
      }
    </div>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  })
  ),
  onMovieTitleClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  films: state.selectedGenre === ALL_GENRES ?
    state.films.slice(0, state.showedMovies) :
    state.films.filter((film) => film.genre === state.selectedGenre).slice(0, state.showedMovies),
  selectedGenre: state.selectedGenre,
  showedMovies: state.showedMovies
});

export {MoviesList};
export default connect(mapStateToProps)(MoviesList);
