import React from 'react';
import { Button } from 'react-native';
import { authService } from '../../api';
import { useAuth } from '../../hooks/useAuth';
import { aes } from '../../utils';

export default function LoginScreen({ navigation }) {
  const { logIn } = useAuth();

  const login = async () => {
    const res = await authService.login({
      Account: 'fred@qq.com',
      Password: aes.encrypt('aa123123'),
    });
    console.log(res.Value.Token);
    logIn(res.Value.Token);
  };

  return <Button title='Login' onPress={() => login()}></Button>;
}
