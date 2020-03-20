import {extend} from "../../utils.js";

const initialState = {
  films: [],
  promoFilm: {},
  movieComments: []
};

const ActionType = {
  GET_MOVIES: `GET_MOVIES`,
  GET_PROMO_MOVIE: `GET_PROMO_MOVIE`,
  GET_COMMENTS: `GET_COMMENTS`,
};

const Operation = {
  getMovies: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.getMovies(response.data));
      });
  },
  getPromoMovie: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`).then((response) => {
      dispatch(ActionCreator.getPromoMovie(response.data));
    });
  },
  getComments: (movieId) => (dispatch, getState, api) => {
    return api.get(`/comments/${movieId}`).then((response) => {
      dispatch(ActionCreator.getComments(response.data));
    });
  }};

const ActionCreator = {
  getMovies: (films) => ({
    type: ActionType.GET_MOVIES,
    payload: films
  }),
  getPromoMovie: (film) => ({
    type: ActionType.GET_PROMO_MOVIE,
    payload: film
  }),
  getComments: (comments) => ({
    type: ActionType.GET_COMMENTS,
    payload: comments
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_MOVIES:
      return extend(state, {
        films: action.payload
      });
    case ActionType.GET_PROMO_MOVIE:
      return extend(state, {
        promoFilm: action.payload
      });
    case ActionType.GET_COMMENTS:
      return extend(state, {
        currentFilmComments: action.payload
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, Operation};
