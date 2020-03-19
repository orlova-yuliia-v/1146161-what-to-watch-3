import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app.jsx";
import {reducer} from "../src/reducer/reducer.js";
import {Operation} from "../src/reducer/reducer.js";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {createAPI} from "./api.js";

const promoFilmMock = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseYear: 2014,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  bgPosterUrl: `img/bg-the-grand-budapest-hotel.jpg`,
  previewUrl: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

const api = createAPI(() => {});

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

store.dispatch(Operation.getMovies());

ReactDOM.render(
    <Provider store={store}>
      <App
        promoFilm={promoFilmMock}
        films={store.getState().films}
      />
    </Provider>,
    document.querySelector(`#root`)
);
