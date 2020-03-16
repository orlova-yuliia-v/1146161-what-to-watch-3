import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import Main from "./main.jsx";
import {ALL_GENRES} from "../../const.js";

const DEFAULT_SHOWED_MOVIES_NUMBER = 8;

const mockStore = configureStore([]);

Enzyme.configure({
  adapter: new Adapter(),
});

const promoFilmMock = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseYear: 2014,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  bgPosterUrl: `img/bg-the-grand-budapest-hotel.jpg`,
  previewUrl: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

const films = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  }
];

it(`should call a callback when the movie title is pressed`, () => {
  const store = mockStore({
    selectedGenre: ALL_GENRES,
    films,
    showedMovies: DEFAULT_SHOWED_MOVIES_NUMBER
  });

  const onMovieTitleClick = jest.fn();

  const main = mount(
      <Provider store={store}>
        <Main
          promoFilm={promoFilmMock}
          films={films}
          onMovieTitleClick={onMovieTitleClick}
          isFullVideoPlayerVisible={false}
          onVisibilityChange={() => {}}
        />
      </Provider>
  );

  const moviesTitle = main.find(`article.small-movie-card.catalog__movies-card`);

  moviesTitle.forEach((title) => {
    title.props().onClick();
  });

  expect(onMovieTitleClick.mock.calls.length).toBe(moviesTitle.length);
});
