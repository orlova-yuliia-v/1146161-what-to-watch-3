import React from "react";
import renderer from "react-test-renderer";
import MyList from "./my-list.jsx";
import configureStore from "redux-mock-store";
import {ALL_GENRES, DEFAULT_SHOWED_MOVIES_NUMBER} from "../../const.js";
import NameSpace from "../../reducer/name-space.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";

const mockStore = configureStore([]);

const authDataMock = {
  id: 1,
  email: `Oliver.conner@gmail.com`,
  name: `Oliver.conner`,
  avatarUrl: `img/1.png`
};

const movies = [{
  id: 1,
  title: `Some title`,
  poster: `1.jpg`,
  bgPosterUrl: `https://image-url.com/1.jpg`,
  genre: `Some genre`,
  releaseYear: 2020,
  director: `Director name`,
  actors: [`Actor 1`, `Actor 2`, `Actor 3`, `Actor 4`, `Actor 5`],
  runTime: 2,
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
},
{
  id: 2,
  title: `Some title`,
  poster: `1.jpg`,
  bgPosterUrl: `https://image-url.com/1.jpg`,
  genre: `Some genre`,
  releaseYear: 2020,
  director: `Director name`,
  actors: [`Actor 1`, `Actor 2`, `Actor 3`, `Actor 4`, `Actor 5`],
  runTime: 2,
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
}];

it(`Should render MyList component`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      movies,
      promoMovie: movies[0],
      movieComments: []
    },
    [NameSpace.STATE]: {
      selectedGenre: ALL_GENRES,
      showedMovies: DEFAULT_SHOWED_MOVIES_NUMBER,
      isFullVideoPlayerVisible: false,
      selectedMovieId: 1
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      authUserData: {authDataMock}
    }
  });

  const tree = renderer
    .create(
        <MemoryRouter>
          <Provider store={store}>
            <MyList
              movies={movies}
              onMovieCardClick={() => { }}
              authUserData={authDataMock} />
          </Provider>
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
