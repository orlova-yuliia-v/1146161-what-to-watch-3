import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const PromoData = {
  PROMO_NAME: `The Grand Budapest Hotel`,
  PROMO_GENRE: `Drama`,
  PROMO_YEAR: 2014
};

ReactDOM.render(
    <App
      promoName={PromoData.PROMO_NAME}
      promoGenre={PromoData.PROMO_GENRE}
      promoYear={PromoData.PROMO_YEAR}
    />,
    document.querySelector(`#root`)
);
