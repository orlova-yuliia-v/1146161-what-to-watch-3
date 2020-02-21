import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const PromoData = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014
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
    ratingLevel: `Good`,
    ratingCount: 1234,
    description: `Film description`
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
    description: `Film description`
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
    description: `Film description`
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
    description: `Film description`
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
    description: `Film description`
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
    description: `Film description`
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
    description: `Film description`
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
    description: `Film description`
  }
];

it(`should render correctly`, () => {
  const tree = renderer
   .create(<App
     promoTitle={PromoData.TITLE}
     promoGenre={PromoData.GENRE}
     promoYear={PromoData.YEAR}
     films={films}
   />)
   .toJSON();

  expect(tree).toMatchSnapshot();
});
