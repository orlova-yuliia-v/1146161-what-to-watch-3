import {ActionCreator, ActionType, reducer} from "./state.js";
import {ALL_GENRES, DEFAULT_SHOWED_MOVIES_NUMBER} from "../../const.js";

it(`should return initial state without additional parameters`, () => {
  expect(reducer(void 0, {})).toEqual({
    selectedGenre: ALL_GENRES,
    showedMovies: DEFAULT_SHOWED_MOVIES_NUMBER,
    isFullVideoPlayerVisible: false,
    selectedMovieId: -1
  });
});


it(`should change genre`, () => {
  expect(reducer({
    selectedGenre: ALL_GENRES
  }, {
    type: ActionType.CHANGE_GENRE,
    payload: `Dramas`
  })).toEqual({
    selectedGenre: `Dramas`
  });

  expect(reducer({
    selectedGenre: ALL_GENRES
  }, {
    type: ActionType.CHANGE_GENRE,
    payload: `Kids & Family`
  })).toEqual({
    selectedGenre: `Kids & Family`
  });
});

it(`should increase showed movies counter`, () => {
  expect(reducer({
    showedMovies: DEFAULT_SHOWED_MOVIES_NUMBER
  }, {
    type: ActionType.SHOW_MORE_MOVIES,
    payload: null
  }
  )).toEqual({
    showedMovies: 16
  });
});

it(`should reset showed movies counter after changing genre`, () => {
  expect(reducer({
    showedMovies: DEFAULT_SHOWED_MOVIES_NUMBER + 1
  }, {
    type: ActionType.RESET_SHOWED_MOVIES_AMOUNT,
    payload: null
  }
  )).toEqual({
    showedMovies: DEFAULT_SHOWED_MOVIES_NUMBER
  });
});

it(`should correctly change state of FullVideoPlayer Visibility`, () => {
  expect(reducer({
    isFullVideoPlayerVisible: false
  }, {
    type: ActionType.CHANGE_VISIBILITY,
  })).toEqual({
    isFullVideoPlayerVisible: true
  });
});

it(`should change selected movie ID`, () => {
  expect(
      reducer(
          {selectedMovieId: -1},
          {
            type: ActionType.CHANGE_SELECTED_MOVIE_ID,
            payload: 3
          }
      )
  ).toEqual({
    selectedMovieId: 3
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for genre changing returns correct action`, () => {
    expect(ActionCreator.changeGenre(`Dramas`)).toEqual({
      type: ActionType.CHANGE_GENRE,
      payload: `Dramas`
    });
  });

  it(`Action creator for genre changing returns correct action`, () => {
    expect(ActionCreator.showMoreMovies()).toEqual({
      type: ActionType.SHOW_MORE_MOVIES,
      payload: null
    });
  });

  it(`Action creator for genre changing returns correct action`, () => {
    expect(ActionCreator.resetShowedMoviesAmount()).toEqual({
      type: ActionType.RESET_SHOWED_MOVIES_AMOUNT,
      payload: null
    });
  });

  it(`Action creator for changeVisibility returns correct action`, () => {
    expect(ActionCreator.changeVisibility()).toEqual({
      type: ActionType.CHANGE_VISIBILITY,
    });
  });

  it(`Action creator for selected movie id returns -1 by default`, () => {
    expect(ActionCreator.changeSelectedMovieId()).toEqual({
      type: ActionType.CHANGE_SELECTED_MOVIE_ID,
    });
  });

  it(`Action creator for selected movie id returns correct action`, () => {
    expect(ActionCreator.changeSelectedMovieId(3)).toEqual({
      type: ActionType.CHANGE_SELECTED_MOVIE_ID,
      payload: 3
    });
  });
});
