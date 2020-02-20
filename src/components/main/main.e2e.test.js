import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const PromoData = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014
};

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


it(`should call a callback when the movie title is pressed`, () => {
  const onMovieTitleClick = jest.fn();

  const main = mount(
      <Main
        promoTitle={PromoData.TITLE}
        promoGenre={PromoData.GENRE}
        promoYear={PromoData.YEAR}
        films={films}
        onMovieTitleClick={onMovieTitleClick}
      />
  );

  const moviesTitle = main.find(`article.small-movie-card.catalog__movies-card`);

  moviesTitle.forEach((title) => {
    title.props().onClick();
  });

  expect(onMovieTitleClick.mock.calls.length).toBe(moviesTitle.length);
  expect(moviesTitle.length).toEqual(films.length);
});
