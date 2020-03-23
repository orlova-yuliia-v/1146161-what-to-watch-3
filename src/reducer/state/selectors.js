import NameSpace from "../name-space.js";

export const getGenre = (state) => {
  return state[NameSpace.STATE].selectedGenre;
};
export const getShowedMovies = (state) => {
  return state[NameSpace.STATE].showedMovies;
};
export const isFullVideoPlayer = (state) => {
  return state[NameSpace.STATE].isFullVideoPlayerVisible;
};
