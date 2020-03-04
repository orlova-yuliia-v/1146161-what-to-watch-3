import {reducer, ActionType, ActionCreator} from "./reducer.js";
import films from "./mocks/films.js";
import {ALL_GENRES} from "./const.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    genre: ALL_GENRES,
    films
  });
});

it(`Reducer should change genre`, () => {
  expect(reducer({
    genre: ALL_GENRES
  }, {
    type: ActionType.CHANGE_GENRE,
    payload: `Dramas`
  })).toEqual({
    genre: `Dramas`
  });

  expect(reducer({
    genre: ALL_GENRES
  }, {
    type: ActionType.CHANGE_GENRE,
    payload: `Kids & Family`
  })).toEqual({
    genre: `Kids & Family`
  });
}
);

describe(`Action creators work correctly`, () => {
  it(`Action creator for genre changing returns correct action`, () => {
    expect(ActionCreator.changeGenre(`Dramas`)).toEqual({
      type: ActionType.CHANGE_GENRE,
      payload: `Dramas`
    });
  });

  it(`Action creator for movies filtering returns correct action`, () => {
    expect(ActionCreator.getMoviesByGenre(`Kids & Family`)).toEqual({
      type: ActionType.GET_MOVIES_BY_GENRE,
      payload: `Kids & Family`
    });
  });

  it(`Action creator for  movies filtering returns default genre if no genre provided`, () => {
    expect(ActionCreator.getMoviesByGenre(ALL_GENRES)).toEqual({
      type: ActionType.GET_MOVIES_BY_GENRE,
      payload: ALL_GENRES
    });
  });

});

