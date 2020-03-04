import {reducer, ActionType} from "./reducer.js";
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
