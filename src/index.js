import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app.jsx";
import reducer from "../src/reducer/reducer.js";
import {Operation as DataOperation} from "../src/reducer/data/data.js";
import {Operation as UserOperation, ActionCreator} from "../src/reducer/user/user.js";
import {AuthorizationStatus} from "../src/reducer/user/user.js";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {createAPI} from "./api.js";


const onUnauthorized = () => {
  store.dispatch(
      ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)
  );
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

store.dispatch(DataOperation.getMovies());
store.dispatch(DataOperation.getPromoMovie());
store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
