import { useAuth } from './../hooks/useAuth';
import { LoginCommand } from './../models/loginCommand';
import { LoginResult } from '../models/LoginResult';
import { ResponseResult } from '../models/ResponseResult';
import http from './httpService';
import axios from 'axios';

async function login(user: LoginCommand) {
  console.log("user", user);
  const res = await axios.post<LoginCommand, ResponseResult<LoginResult>>(
    `login`,
    user,
  );
  console.log("res", res);
  return res;
}

export default {
  login,
};
