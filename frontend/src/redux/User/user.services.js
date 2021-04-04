import axiosInstance from '../../axiosApi';
import {
  loginRequest,
  loginSuccess,
  loginFail,
  logoutRequest,
  logoutSuccess,
  logoutFail,
} from '../../redux/User/user.actions';

export const userLoginService = async (
  username,
  password,
  history,
  dispatch
) => {
  try {
    dispatch(loginRequest());
    const res = await axiosInstance.post('/auth/token/obtain/', {
      username: username,
      password: password,
    });
    const { access: accessToken, refresh: refreshToken, user } = res.data;
    axiosInstance.defaults.headers['Authorization'] = 'JWT ' + accessToken;
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('refresh_token', refreshToken);
    dispatch(loginSuccess(user));
    history.push('/hello');
    return res.data;
  } catch (err) {
    dispatch(loginFail([err.response.data]));
  }
};

export const userLogoutService = async (dispatch, history) => {
  try {
    dispatch(logoutRequest());
    const res = await axiosInstance.post('/auth/logout/', {
      refresh_token: localStorage.getItem('refresh_token'),
    });
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    axiosInstance.defaults.headers['Authorization'] = null;
    dispatch(logoutSuccess());
    history.push('/');
    return res;
  } catch (e) {
    dispatch(logoutFail());
    console.log(e);
  }
};
