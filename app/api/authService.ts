import http from './httpService';

function login(user) {
  return http.post(`login`, user);
}

export default {
  login,
};
