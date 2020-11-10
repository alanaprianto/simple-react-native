import request from "../../config/request";
import URL from "../../config/url";

export const loginRequest = (data, callback) => (dispatch) => {
  dispatch({
    type: APP_LOGIN_BEGIN,
  });
  request
    .post(URL.login, data)
    .then((res) => {
      if (res.status === 200) {
        callback({
          ...res.data,
          message: res.data.message
        });
        dispatch({
          type: APP_LOGIN_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: APP_LOGIN_FAIL,
          payload: { error: res.data },
        });
      }
    })
    .catch((error) => {
      callback({ error: JSON.parse(error.response.request._response) })
      dispatch({
        type: APP_LOGIN_FAIL,
        payload: { error: JSON.parse(error.response.request._response) },
      });
    });
};

export const registerRequest = (data, callback) => (dispatch) => {
  dispatch({
    type: APP_REGISTER_BEGIN,
  });
  request
    .post(URL.register, data)
    .then((res) => {
      if (res.status === 200) {
        callback(res.data);
        dispatch({
          type: APP_REGISTER_SUCCESS,
          payload: res.data,
        });
      } else {
        callback({ error: res.data })
        dispatch({
          type: APP_REGISTER_FAIL,
          payload: { error: res.data.code_message },
        });
      }
    })
    .catch((error) => {
      callback({ error: JSON.parse(error.response.request._response) })
      dispatch({
        type: APP_REGISTER_FAIL,
        payload: { error: JSON.parse(error.response.request._response) },
      });
    });
};

export const dispatchLogout = () => dispatch => {
  dispatch({
    type: APP_LOGOUT
  })
}

export const APP_LOGIN_BEGIN = 'APP_LOGIN_BEGIN';
export const APP_LOGIN_SUCCESS = 'APP_LOGIN_SUCCESS';
export const APP_LOGIN_FAIL = 'APP_LOGIN_FAIL';

export const APP_REGISTER_BEGIN = 'APP_REGISTER_BEGIN';
export const APP_REGISTER_SUCCESS = 'APP_REGISTER_SUCCESS';
export const APP_REGISTER_FAIL = 'APP_REGISTER_FAIL';


export const APP_LOGOUT = 'APP_LOGOUT';
