import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card.jsx";
import {MemoryRouter} from "react-router-dom";

const movie = {
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
};

it(`should render correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <SmallMovieCard
            movie={movie}
            onMovieEnter={() => { }}
            onMovieLeave={() => { }}
            onMovieCardClick={() => { }}
            isPlaying={true}
          />
        </MemoryRouter>,
        {
          createNodeMock: (element) => {
            if (element.type === `video`) {
              return {
                paused: undefined, // mock enzyme behavior
                play: () => { }
              };
            }
            return null;
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
