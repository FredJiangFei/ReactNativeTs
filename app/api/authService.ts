import http from './httpService';

function login(user) {
  return http.post(`login`, user);
}

function test() {
  return http.get(`test`);
}


export default {
  login,
  test
};
