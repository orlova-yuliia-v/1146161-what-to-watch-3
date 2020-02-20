import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card.jsx";

const film = {
  title: `Bohemian Rhapsody`,
  poster: `img/bohemian-rhapsody.jpg`
};

it(`should render correctly`, () => {
  const tree = renderer
    .create(
        <SmallMovieCard
          film={film}
          onMovieEnter={() => {}}
          onMovieLeave={() => {}}
          onMovieTitleClick={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
