import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";
import {reducer, ActionCreator, ActionType, Operation, AuthorizationStatus} from "./user.js";

const api = createAPI(() => {});

const authDataMock = {
  id: 1,
  email: `Oliver.conner@gmail.com`,
  name: `Oliver.conner`,
  avatarUrl: `img/1.png`
};


it(`should return initial state without additional parameters`, () => {
  expect(reducer(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    authUserData: {}
  });
});

it(`should update authorization status`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  }, {
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH
  });
});

it(`should set authUserData by setAuthUserData`, () => {
  expect(reducer({
    authUserData: {},
  }, {
    type: ActionType.SET_AUTH_USER_DATA,
    payload: authDataMock
  })).toEqual({
    authUserData: authDataMock
  });
});


describe(`Action creators work correctly`, () => {
  it(`Action creator for require authorization returns correct action`, () => {
    expect(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)).toEqual({
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH
    });
  });

  it(`Action creator for setAuthUserData returns correct action`, () => {
    expect(ActionCreator.setAuthUserData(authDataMock)).toEqual({
      type: ActionType.SET_AUTH_USER_DATA,
      payload: authDataMock
    });
  });
});


describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /login`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuth = Operation.checkAuth();

    apiMock.onGet(`/login`).reply(200, {
      'id': 1,
      'email': `Oliver.conner@gmail.com`,
      'name': `Oliver.conner`,
      'avatar_url': `img/1.png`
    });

    return checkAuth(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);

      expect(dispatch).toHaveBeenNthCalledWith(1,
          {
            type: ActionType.SET_AUTH_USER_DATA,
            payload: authDataMock
          });
      expect(dispatch).toHaveBeenNthCalledWith(2,
          {
            type: ActionType.REQUIRE_AUTHORIZATION,
            payload: AuthorizationStatus.AUTH
          });
    });
  });

  it(`Should make a correct API call to /login`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const login = Operation.login({
      login: `Oliver.conner@gmail.com`,
      password: `123`
    });

    apiMock.onPost(`/login`).reply(200, {
      'id': 1,
      'email': `Oliver.conner@gmail.com`,
      'name': `Oliver.conner`,
      'avatar_url': `img/1.png`
    });

    return login(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1,
          {
            type: ActionType.SET_AUTH_USER_DATA,
            payload: authDataMock
          });
      expect(dispatch).toHaveBeenNthCalledWith(2,
          {
            type: ActionType.REQUIRE_AUTHORIZATION,
            payload: AuthorizationStatus.AUTH
          });
    });
  });
});

