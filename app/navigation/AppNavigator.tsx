import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      {/* <DrawerNavigator /> */}
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
