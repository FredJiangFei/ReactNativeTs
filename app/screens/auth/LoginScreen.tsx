import React, { useState } from 'react';
import { Button, Text, FlatList } from 'react-native';
import { authService } from '../../api';
import { Loader } from '../../components';
import { useAuth } from '../../hooks/useAuth';
import { aes } from '../../utils';
import { requestStatus } from '../../models/requestStatus';

export default function LoginScreen({ navigation }) {
  const { logIn } = useAuth();
  const [status, setStatus] = useState(requestStatus.IDLE);

  const login = async () => {
    setStatus(requestStatus.PENDING);
    const res: any = await authService.login({
      Account: 'fred@qq.com',
      Password: aes.encrypt('aa123123'),
    });
    logIn(res.data.value.token);
    setStatus(requestStatus.SUCCESS);
  };

  return (
    <>
      <Loader visible={status === requestStatus.PENDING} />
      <Button title='Login' onPress={() => login()}></Button>
    </>
  );
}
