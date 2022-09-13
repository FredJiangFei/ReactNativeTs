import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './routes';
import HeaderBar from '../parts/headerBar';
import colors from '../config/colors';
import AchievementScreen from '../screens/AchievementScreen';

const Stack = createNativeStackNavigator();

const AchievementNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
       headerShown: false,
      }}
    >
      <Stack.Screen name={routes.AchievementList} component={AchievementScreen} />
    </Stack.Navigator>
  );
};

export default AchievementNavigator;
