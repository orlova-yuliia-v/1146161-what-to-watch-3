import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import PrivateRoute from "./private-route.jsx";
import configureStore from "redux-mock-store";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {BrowserRouter} from "react-router-dom";
import {AppRoute} from "../../const.js";
import NameSpace from "../../reducer/name-space.js";

const mockStore = configureStore([]);

const authDataMock = {
  id: 1,
  email: `Oliver.conner@gmail.com`,
  name: `Oliver.conner`,
  avatarUrl: `img/1.png`
};

it(`PrivateRoute is renderer correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      authUserData: {authDataMock}
    }
  });
  const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <PrivateRoute render={() => (<div>DIV</div>)} path={AppRoute.LOGIN} exact={true} authorizationStatus={AuthorizationStatus.AUTH} />
        </BrowserRouter>
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
