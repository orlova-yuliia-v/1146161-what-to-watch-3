import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const PromoData = {
  PROMO_NAME: `The Grand Budapest Hotel`,
  PROMO_GENRE: `Drama`,
  PROMO_YEAR: 2014
};
const filmsTitle = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`, `We need to talk about Kevin`, `What We Do in the Shadows`, `Revenant`, `Johnny English`];

it(`should render correctly`, () => {
  const tree = renderer
   .create(<Main
     promoName={PromoData.PROMO_NAME}
     promoGenre={PromoData.PROMO_GENRE}
     promoYear={PromoData.PROMO_YEAR}
     filmsTitle={filmsTitle}
     onMovieTitleClick={() => {}}
   />)
   .toJSON();

  expect(tree).toMatchSnapshot();
});
