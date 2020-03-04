import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app.jsx";
import films from "./mocks/films.js";
import {reducer} from "./reducer.js";

const PromoData = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014
};

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <App
        promoTitle={PromoData.TITLE}
        promoGenre={PromoData.GENRE}
        promoYear={PromoData.YEAR}
        films={films}
      />
    </Provider>,
    document.querySelector(`#root`)
);
