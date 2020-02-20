import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import films from "./mocks/films.js";

const PromoData = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014
};

ReactDOM.render(
    <App
      promoTitle={PromoData.TITLE}
      promoGenre={PromoData.GENRE}
      promoYear={PromoData.YEAR}
      films={films}
    />,
    document.querySelector(`#root`)
);
