import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const PromoData = {
  PROMO_NAME: `The Grand Budapest Hotel`,
  PROMO_GENRE: `Drama`,
  PROMO_YEAR: 2014
};

const filmsTitle = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`, `We need to talk about Kevin`, `What We Do in the Shadows`, `Revenant`, `Johnny English`];

it(`should call a callback when the movie title is pressed`, () => {
  const onMovieTitleClick = jest.fn();

  const main = shallow(
      <Main
        promoName={PromoData.PROMO_NAME}
        promoGenre={PromoData.PROMO_GENRE}
        promoYear={PromoData.PROMO_YEAR}
        filmsTitle={filmsTitle}
        onMovieTitleClick={onMovieTitleClick}
      />
  );

  const moviesTitle = main.find(`.small-movie-card__link`);

  moviesTitle.forEach((title) => {
    title.props().onClick();
  });

  expect(onMovieTitleClick.mock.calls.length).toBe(moviesTitle.length);
  expect(moviesTitle.length).toEqual(filmsTitle.length);
});
