import { useAuth } from './../hooks/useAuth';
import { LoginCommand } from './../models/loginCommand';
import { LoginResult } from '../models/LoginResult';
import { ResponseResult } from '../models/ResponseResult';
import http from './httpService';

async function login(user: LoginCommand) {
  const { logIn } = useAuth();
  const res = await http.post<LoginCommand, ResponseResult<LoginResult>>(
    `login`,
    user,
  );
  if (res && res.Code === 200) {
    logIn(res.Value.Token);
  }
  return res;
}

export default {
  login,
};
