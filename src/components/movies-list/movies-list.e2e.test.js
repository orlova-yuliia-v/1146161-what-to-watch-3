import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MemoryRouter} from "react-router-dom";
import {MoviesList} from "./movies-list";

configure({adapter: new Adapter()});

const mock = {
  movies: [
    {
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
      ],
      isFavorite: true
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
      ],
      isFavorite: true
    },
    {
      id: 3,
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
      ],
      isFavorite: true
    },
    {
      id: 4,
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
      ],
      isFavorite: true
    },
    {
      id: 5,
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
      ],
      isFavorite: true
    },
    {
      id: 6,
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
      ],
      isFavorite: true
    },
    {
      id: 7,
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
      ],
      isFavorite: true
    },
    {
      id: 8,
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
      ],
      isFavorite: true
    }
  ]};

it(`should call a callback when the movie title or poster is pressed`, () => {
  const {movies} = mock;
  const onMovieCardClick = jest.fn();

  const moviesList = mount(
      <MemoryRouter>
        <MoviesList
          movies={movies}
          onMovieCardClick={onMovieCardClick}
        />
      </MemoryRouter>
  );
  const movieCard = moviesList.find(`article.small-movie-card.catalog__movies-card`);

  movieCard.forEach((card) => {
    card.simulate(`click`);
  });

  expect(onMovieCardClick.mock.calls.length).toBe(movieCard.length);
  expect(movieCard.length).toEqual(movies.length);
});
