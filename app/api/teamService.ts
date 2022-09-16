import http from './httpService';

function createTeam(data) {
  return http.post(`teams`, data);
}

function getAthleteActiveTeams(athleteId) {
  return http.get(`athletes/${athleteId}/active-teams`);
}

export default {
  createTeam,
  getAthleteActiveTeams
};
