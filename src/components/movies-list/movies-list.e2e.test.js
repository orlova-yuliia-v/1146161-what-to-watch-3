import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MoviesList from "./movies-list";

configure({adapter: new Adapter()});

const mock = {
  films: [
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
      ratingLevel: `Good`,
      ratingCount: 1234,
      description: `Film description`,
      previewUrl: `https://preview-url.com/1.mp4`
    },
    {
      title: `Some title`,
      poster: `1.jpg`,
      bgPosterUrl: `https://img-url.com/1.jpg`,
      genre: `Some genre`,
      releaseYear: 2020,
      director: `Director name`,
      starring: [`Actor 1`, `Actor 2`, `Actor 3`, `Actor 4`, `Actor 5`],
      runTime: `2h 00m`,
      ratingScore: 7.5,
      ratingLevel: `Good`,
      ratingCount: 1234,
      description: `Film description`,
      previewUrl: `https://preview-url.com/1.mp4`
    },
    {
      title: `Some title`,
      poster: `1.jpg`,
      bgPosterUrl: `https://img-url.com/1.jpg`,
      genre: `Some genre`,
      releaseYear: 2020,
      director: `Director name`,
      starring: [`Actor 1`, `Actor 2`, `Actor 3`, `Actor 4`, `Actor 5`],
      runTime: `2h 00m`,
      ratingScore: 7.5,
      ratingLevel: `Good`,
      ratingCount: 1234,
      description: `Film description`,
      previewUrl: `https://preview-url.com/1.mp4`
    },
    {
      title: `Some title`,
      poster: `1.jpg`,
      bgPosterUrl: `https://img-url.com/1.jpg`,
      genre: `Some genre`,
      releaseYear: 2020,
      director: `Director name`,
      starring: [`Actor 1`, `Actor 2`, `Actor 3`, `Actor 4`, `Actor 5`],
      runTime: `2h 00m`,
      ratingScore: 7.5,
      ratingLevel: `Good`,
      ratingCount: 1234,
      description: `Film description`,
      previewUrl: `https://preview-url.com/1.mp4`
    },
    {
      title: `Some title`,
      poster: `1.jpg`,
      bgPosterUrl: `https://img-url.com/1.jpg`,
      genre: `Some genre`,
      releaseYear: 2020,
      director: `Director name`,
      starring: [`Actor 1`, `Actor 2`, `Actor 3`, `Actor 4`, `Actor 5`],
      runTime: `2h 00m`,
      ratingScore: 7.5,
      ratingLevel: `Good`,
      ratingCount: 1234,
      description: `Film description`,
      previewUrl: `https://preview-url.com/1.mp4`
    },
    {
      title: `Some title`,
      poster: `1.jpg`,
      bgPosterUrl: `https://img-url.com/1.jpg`,
      genre: `Some genre`,
      releaseYear: 2020,
      director: `Director name`,
      starring: [`Actor 1`, `Actor 2`, `Actor 3`, `Actor 4`, `Actor 5`],
      runTime: `2h 00m`,
      ratingScore: 7.5,
      ratingLevel: `Good`,
      ratingCount: 1234,
      description: `Film description`,
      previewUrl: `https://preview-url.com/1.mp4`
    },
    {
      title: `Some title`,
      poster: `1.jpg`,
      bgPosterUrl: `https://img-url.com/1.jpg`,
      genre: `Some genre`,
      releaseYear: 2020,
      director: `Director name`,
      starring: [`Actor 1`, `Actor 2`, `Actor 3`, `Actor 4`, `Actor 5`],
      runTime: `2h 00m`,
      ratingScore: 7.5,
      ratingLevel: `Good`,
      ratingCount: 1234,
      description: `Film description`,
      previewUrl: `https://preview-url.com/1.mp4`
    },
    {
      title: `Some title`,
      poster: `1.jpg`,
      bgPosterUrl: `https://img-url.com/1.jpg`,
      genre: `Some genre`,
      releaseYear: 2020,
      director: `Director name`,
      starring: [`Actor 1`, `Actor 2`, `Actor 3`, `Actor 4`, `Actor 5`],
      runTime: `2h 00m`,
      ratingScore: 7.5,
      ratingLevel: `Good`,
      ratingCount: 1234,
      description: `Film description`,
      previewUrl: `https://preview-url.com/1.mp4`
    }
  ]
};
it(`should call a callback when the movie title or poster is pressed`, () => {
  const {films} = mock;
  const onMovieTitleClick = jest.fn();

  const moviesList = mount(
      <MoviesList
        films={films}
        onMovieTitleClick={onMovieTitleClick}
      />
  );
  const movieCard = moviesList.find(`article.small-movie-card.catalog__movies-card`);

  movieCard.forEach((card) => {
    card.simulate(`click`);
  });

  expect(onMovieTitleClick.mock.calls.length).toBe(movieCard.length);
  expect(movieCard.length).toEqual(films.length);
});
