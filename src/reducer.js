import {extend} from "./utils.js";
import films from "./mocks/films.js";
import {ALL_GENRES} from "./const.js";

const initialState = {
  selectedGenre: ALL_GENRES,
  films
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`
};

const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        selectedGenre: action.payload
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
