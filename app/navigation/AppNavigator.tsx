import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';
import { useAuth } from '../hooks/useAuth';
import theme from './navigationTheme';
import Screen from '../components/Screen';

const AppNavigator = () => {
  const { user } = useAuth();
  return (
    <NavigationContainer theme={theme}>
      {user ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
