import {createSelector} from "reselect";
import NameSpace from "../name-space.js";

export const getMovies = (state) => {
  return state[NameSpace.DATA].movies;
};

export const getPromoMovie = (state) => {
  return state[NameSpace.DATA].promoMovie;
};

export const getComments = (state) => {
  return state[NameSpace.DATA].movieComments;
};

const findMyMoviesList = (movies) => {
  return movies.filter((movie) => movie.isFavorite === true);
};
export const getMyMoviesList = createSelector(
    (state) => state[NameSpace.DATA].movies,
    findMyMoviesList);
