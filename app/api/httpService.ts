import axios from 'axios';
import jwtDecode from 'jwt-decode';
import config from '../../config';
import storage from '../auth/storage';

const tokenKey = 'token';

const request = axios.create({
  timeout: 30000,
  baseURL: config.apiUrl + '/api',
});

request.interceptors.response.use(
  res => res?.data,
  error => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status <= 600;
    if (expectedError) {
      return Promise.resolve(error.response.data);
    }

    return Promise.resolve(null);
  },
);

request.interceptors.request.use(async (cfg: any) => {
  const token = await storage.getToken();
  cfg.headers['Authorization'] = 'Bearer ' + token;
  return cfg;
});

function isTokenExpired() {
  const localJwt = sessionStorage.getItem(tokenKey);
  if (!localJwt) {
    return true;
  }
  const decodedToken: any = jwtDecode(localJwt);
  return Date.now() >= decodedToken.exp * 1000;
}

export default {
  get: request.get,
  post: request.post,
  put: request.put,
  delete: request.delete,
  isTokenExpired,
};
