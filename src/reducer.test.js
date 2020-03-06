import {reducer, ActionType, ActionCreator} from "./reducer.js";
import films from "./mocks/films.js";
import {ALL_GENRES} from "./const.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    selectedGenre: ALL_GENRES,
    films
  });
});

it(`Reducer should change genre`, () => {
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
}
);

describe(`Action creators work correctly`, () => {
  it(`Action creator for genre changing returns correct action`, () => {
    expect(ActionCreator.changeGenre(`Dramas`)).toEqual({
      type: ActionType.CHANGE_GENRE,
      payload: `Dramas`
    });
  });

});

