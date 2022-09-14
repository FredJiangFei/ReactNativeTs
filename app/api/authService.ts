import http from './httpService';

function login(user) {
  return http.post(`login`, user);
}

function test() {
  return http.get(`users?page=2`);
}


export default {
  login,
  test
};
