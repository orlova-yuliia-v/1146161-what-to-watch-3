import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app.jsx";
import films from "./mocks/films.js";
import {reducer} from "./reducer.js";

const promoFilmMock = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseYear: 2014,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  bgPosterUrl: `img/bg-the-grand-budapest-hotel.jpg`,
  previewUrl: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        promoFilm={promoFilmMock}
        films={films}
      />
    </Provider>,
    document.querySelector(`#root`)
);
