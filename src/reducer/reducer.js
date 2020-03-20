import {extend} from "../utils.js";
import {ALL_GENRES} from "../const.js";

const DEFAULT_SHOWED_MOVIES_NUMBER = 8;

const initialState = {
  selectedGenre: ALL_GENRES,
  films: [],
  promoFilm: {},
  movieComments: [],
  showedMovies: DEFAULT_SHOWED_MOVIES_NUMBER,
  isFullVideoPlayerVisible: false
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  SHOW_MORE_MOVIES: `SHOW_MORE_MOVIES`,
  RESET_SHOWED_MOVIES_AMOUNT: `RESET_SHOWED_MOVIES_AMOUNT`,
  CHANGE_VISIBILITY: `CHANGE_VISIBILITY`,
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
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  }),
  showMoreMovies: () => ({
    type: ActionType.SHOW_MORE_MOVIES,
    payload: null
  }),
  resetShowedMoviesAmount: () => ({
    type: ActionType.RESET_SHOWED_MOVIES_AMOUNT,
    payload: null
  }),
  changeVisibility: () => ({type: ActionType.CHANGE_VISIBILITY}),

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
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        selectedGenre: action.payload
      });
    case ActionType.SHOW_MORE_MOVIES:
      return extend(state, {
        showedMovies: state.showedMovies + 8
      });
    case ActionType.RESET_SHOWED_MOVIES_AMOUNT:
      return extend(state, {
        showedMovies: DEFAULT_SHOWED_MOVIES_NUMBER
      });
    case ActionType.CHANGE_VISIBILITY:
      return Object.assign({}, state, {isFullVideoPlayerVisible: !state.isFullVideoPlayerVisible});
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
