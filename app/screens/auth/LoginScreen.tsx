import React, { useState } from 'react';
import { Button, Text, FlatList } from 'react-native';
import { authService } from '../../api';
import { useAuth } from '../../hooks/useAuth';
import { aes } from '../../utils';

export default function LoginScreen({ navigation }) {
  const { logIn } = useAuth();
  const [users, setUsers] = useState([]);

  const login = async () => {
    const res: any = await authService.test();
    setUsers(res.data.data);

    // const res: any = await authService.login({
    //   Account: 'fred@qq.com',
    //   Password: aes.encrypt('aa123123'),
    // });
    // logIn(res.value.token);
  };

  return (
    <>
      <Button title='Login' onPress={() => login()}></Button>
      <FlatList
        data={users}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => <Text>{item.first_name}</Text>}
      />
    </>
  );
}
