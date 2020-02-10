import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const PromoData = {
  PROMO_NAME: `The Grand Budapest Hotel`,
  PROMO_GENRE: `Drama`,
  PROMO_YEAR: 2014
};
const filmsTitle = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`, `We need to talk about Kevin`, `What We Do in the Shadows`, `Revenant`, `Johnny English`];

ReactDOM.render(
    <App
      promoName={PromoData.PROMO_NAME}
      promoGenre={PromoData.PROMO_GENRE}
      promoYear={PromoData.PROMO_YEAR}
      filmsTitle={filmsTitle}
    />,
    document.querySelector(`#root`)
);
