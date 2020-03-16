import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import MoviePage from "./movie-page.jsx";
import {ALL_GENRES} from "../../const.js";
import films from "../../mocks/films.js";

const DEFAULT_SHOWED_MOVIES_NUMBER = 8;

const mockStore = configureStore([]);

const film = {
  title: `Some title`,
  poster: `1.jpg`,
  bgPosterUrl: `https://image-url.com/1.jpg`,
  genre: `Some genre`,
  releaseYear: 2020,
  director: `Director name`,
  starring: [`Actor 1`, `Actor 2`, `Actor 3`, `Actor 4`, `Actor 5`],
  runTime: `2h 00m`,
  ratingScore: 7.5,
  ratingCount: 1234,
  description: `Film description`,
  previewUrl: `https://preview-url.com/1.mp4`,
  reviews: [
    {
      ratingScore: 8.5,
      date: `September 8, 2019`,
      author: `Yuliia Orlova`,
      text: `Review text`
    }
  ]
};

it(`should render correctly`, () => {
  const store = mockStore({
    selectedGenre: ALL_GENRES,
    films,
    showedMovies: DEFAULT_SHOWED_MOVIES_NUMBER,
    isFullVideoPlayerVisible: false
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <MoviePage
            film={film}
            onMovieTitleClick={() => {}}
            isFullVideoPlayerVisible={false}
            onVisibilityChange={() => {}}
          />
        </Provider>,
        {
          createNodeMock: () => ({})
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
