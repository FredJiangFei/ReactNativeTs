import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import routes from './routes';
import HomeScreen from '../screen/HomeScreen';
import CalendarScreen from '../screen/CalendarScreen';

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={routes.Home} component={HomeScreen} />
      <Tab.Screen name={routes.Calendar} component={CalendarScreen} />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
