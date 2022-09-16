import axios from 'axios';
import jwtDecode from 'jwt-decode';
import config from '../../config';
import storage from '../auth/storage';
import { store as storeCache, get as getCache } from '../utils/cache';

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

const getWithCache = async (url, params, axiosConfig) => {
  const res: any = await request.get(url, params, axiosConfig);
  if (res.ok) {
    storeCache(url, res.data);
    return res;
  }

  const data = await getCache(url);
  return data ? { ok: true, data } : res;
};

export default {
  get: getWithCache,
  post: request.post,
  put: request.put,
  delete: request.delete,
  isTokenExpired,
};
