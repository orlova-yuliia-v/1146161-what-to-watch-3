import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs.jsx";

const film = {
  title: `Some title`,
  poster: `1.jpg`,
  bgPosterUrl: `https://image-url.com/1.jpg`,
  genre: `Some genre`,
  releaseYear: 2020,
  director: `Director name`,
  starring: [`Actor 1`, `Actor 2`, `Actor 3`, `Actor 4`, `Actor 5`],
  runTime: `2h 00m`,
  ratingScore: parseFloat(`7.5`),
  ratingCount: 1234,
  description: `Film description`,
  previewUrl: `https://preview-url.com/1.mp4`,
  reviews: [
    {
      ratingScore: parseFloat(`8.5`),
      date: `September 8, 2019`,
      author: `Yuliia Orlova`,
      text: `Review text`
    }
  ]
};

it(`should render correctly`, () => {
  const tree = renderer
  .create(<Tabs film={film} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
