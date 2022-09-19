import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';
import { useAuth } from '../hooks/useAuth';
import theme from './navigationTheme';

const AppNavigator = () => {
  const { user } = useAuth();
  return (
    <NavigationContainer theme={theme}>
      <DrawerNavigator />
      {/* {user ? <DrawerNavigator /> : <AuthNavigator />} */}
    </NavigationContainer>
  );
};

export default AppNavigator;
