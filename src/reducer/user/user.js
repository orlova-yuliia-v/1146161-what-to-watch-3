import {extend, normalizeUserData} from "../../utils.js";

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authUserData: {}
};

const ActionType = {
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  SET_AUTH_USER_DATA: `SET_AUTH_USER_DATA`
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {

    return api
    .get(`/login`)
      .then((response) => {
        if (!response) {
          return;
        }
        const normalizedAuthData = normalizeUserData(response.data);

        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.setAuthUserData(normalizedAuthData));

      })

      .catch((err) => {
        throw err;
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api
      .post(`/login`, {
        email: authData.login,
        password: authData.password
      })
      .then((response) => {
        if (!response) {
          return;
        }
        const normalizedAuthData = normalizeUserData(response.data);

        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.setAuthUserData(normalizedAuthData));
      })

      .catch((err) => {
        throw err;
      });
  }
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: status
    };
  },
  setAuthUserData: (authUserData) => {
    return {
      type: ActionType.SET_AUTH_USER_DATA,
      payload: authUserData
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload
      });
    case ActionType.SET_AUTH_USER_DATA:
      return extend(state, {
        authUserData: action.payload
      });
  }

  return state;
};

export {reducer, ActionCreator, ActionType, AuthorizationStatus, Operation};
