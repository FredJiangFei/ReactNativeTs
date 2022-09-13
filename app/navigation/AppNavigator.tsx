import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';
import { useAuth } from '../hooks/useAuth';

const AppNavigator = () => {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      <DrawerNavigator />
      {/* {user ? <DrawerNavigator /> : <AuthNavigator />} */}
    </NavigationContainer>
  );
};

export default AppNavigator;
