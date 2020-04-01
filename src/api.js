import axios from "axios";
import history from "./history.js";
import {AppRoute} from "./const.js";

const Error = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400
};

const TIMEOUT = 5000;
const LOGIN_URL = `https://htmlacademy-react-3.appspot.com/wtw/login`;

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-3.appspot.com/wtw`,
    timeout: TIMEOUT,
    withCredentials: true
  });

  const onSuccess = (response) => {
    return response;
  };

  const onError = (err) => {
    const {response, request} = err;

    if (response.status === Error.UNAUTHORIZED) {
      onUnauthorized();

      if (request.responseURL !== LOGIN_URL) {
        history.push(AppRoute.LOGIN);
      }
      throw err;
    }

    if (response.status === Error.BAD_REQUEST) {
      onUnauthorized();
      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};
