import NameSpace from "../namespace.js";

export const getGenre = (state) => {
  return state[NameSpace.STATE].selectedGenre;
};
export const getShowedMovies = (state) => {
  return state[NameSpace.STATE].showedMovies;
};
export const getFullVideoPlayer = (state) => {
  return state[NameSpace.STATE].isFullVideoPlayerVisible;
};
