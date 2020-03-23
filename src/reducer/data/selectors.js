import {createSelector} from "reselect";
import NameSpace from "../name-space.js";
import {ALL_GENRES} from "../../const.js";

const MAX_SIMILAR_MOVIES_NUMBER = 4;

export const getMovies = (state) => {
  return state[NameSpace.DATA].movies;
};

export const getPromoMovie = (state) => {
  return state[NameSpace.DATA].promoMovie;
};

export const getComments = (state) => {
  return state[NameSpace.DATA].movieComments;
};

const filterMoviesByGenre = (state) => {
  const movies = state[NameSpace.DATA].movies;
  const showedMovies = state[NameSpace.STATE].showedMovies;
  const selectedGenre = state[NameSpace.STATE].selectedGenre;

  return selectedGenre === ALL_GENRES
    ? movies.slice(0, showedMovies)
    : movies.filter((movie) => movie.genre === selectedGenre).slice(0, showedMovies);
};

export const getMoviesByGenre = createSelector(
    (state) => state,
    filterMoviesByGenre
);

const findSelectedMovie = (state) => {
  const movies = state[NameSpace.DATA].movies;
  const id = state[NameSpace.STATE].selectedMovieId;
  return movies.find((movie) => movie.id === id);
};

export const getSelectedMovie = createSelector(
    (state) => state,
    findSelectedMovie
);

const filterSimilarMovies = (movies, selectedMovieId, maxNumber = MAX_SIMILAR_MOVIES_NUMBER) => {
  const selectedMovie = movies.find((movie) => movie.id === selectedMovieId);
  return movies.filter(
      (similarMovie) =>
        similarMovie.genre === selectedMovie.genre && similarMovie.title !== selectedMovie.title).slice(0, maxNumber);
};

export const getSimilarMovies = createSelector(
    (state) => state[NameSpace.DATA].movies,
    (state) => state[NameSpace.STATE].selectedMovieId,
    filterSimilarMovies
);

