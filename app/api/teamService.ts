import http from './httpService';

function createTeam(data) {
  return http.post(`teams`, data);
}

export default {
  createTeam,
};
