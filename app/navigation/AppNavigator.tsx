import React from 'react';
import { Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';
import { useAuth } from '../hooks/useAuth';

const TestLogin = () => {
  const { logOut } = useAuth();
  return (
    <>
      <Text>123</Text>
      <Button title='logout' onPress={logOut}></Button>
    </>
  );
};

const AppNavigator = () => {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      {/* {user ? <DrawerNavigator /> : <AuthNavigator />} */}
      {user ? <TestLogin /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
