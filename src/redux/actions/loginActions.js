import axios from 'axios';

export const loginAction = (info) => ({
  type: 'login',
  info,
});

export const loginError = (message) => ({
  type: 'loginError',
  message,
});

export const axiosLogin = (login, password) => async (dispatch) => {
  const request = await axios.post('https://simply-wallet-api.herokuapp.com/users', {
    login,
    password,
  });
  if (request.data.code !== 200) return dispatch(loginError(request.data.message));
  return dispatch(loginAction(request.data.info));
};
