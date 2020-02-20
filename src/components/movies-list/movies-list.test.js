import React from "react";
import renderer from "react-test-renderer";
import MoviesList from '../movies-list/movies-list.jsx';

const films = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwal`,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
  },
  {
    title: `Bohemian Rhapsody`,
    poster: `img/bohemian-rhapsody.jpg`
  },
  {
    title: `Macbeth`,
    poster: `img/macbeth.jpg`
  },
  {
    title: `Aviator`,
    poster: `img/aviator.jpg`
  },
  {
    title: `We need to talk about Kevin`,
    poster: `img/we-need-to-talk-about-kevin.jpg`
  },
  {
    title: `What We Do in the Shadows`,
    poster: `img/what-we-do-in-the-shadows.jpg`
  },
  {
    title: `Revenant`,
    poster: `img/revenant.jpg`
  },
  {
    title: `Johnny English`,
    poster: `img/johnny-english.jpg`
  }
];


it(`should render correctly`, () => {
  const tree = renderer
    .create(
        <MoviesList
          films={films}
          onMovieTitleClick={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
