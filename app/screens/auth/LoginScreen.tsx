import React, { useState } from 'react';
import { Button, Text } from 'react-native';
import { authService } from '../../api';
import { useAuth } from '../../hooks/useAuth';
import { aes } from '../../utils';

export default function LoginScreen({ navigation }) {
  const { logIn } = useAuth();
  const [first, setfirst] = useState('');

  const login = async () => {
    const res: any = await authService.test();
    setfirst(res.value);
    // const res: any = await authService.login({
    //   Account: 'fred@qq.com',
    //   Password: aes.encrypt('aa123123'),
    // });
    // logIn(res.value.token);
  };

  return (
    <>
      <Button title='Login' onPress={() => login()}></Button>
      <Text>{first}</Text>
    </>
  );
}
