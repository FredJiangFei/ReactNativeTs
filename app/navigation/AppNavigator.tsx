import React from 'react';
import HomeNavigator from './HomeNavigator';
import { NavigationContainer } from '@react-navigation/native';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
