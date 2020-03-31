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

const findMyMoviesList = (state) =>
  state[NameSpace.DATA].movies.filter((movie) => movie.isFavorite);

export const getMyMoviesList = createSelector(
    (state) => state,
    findMyMoviesList);
