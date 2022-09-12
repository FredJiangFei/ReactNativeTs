import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import routes from './routes';
import HomeScreen from '../screen/HomeScreen';
import CalendarScreen from '../screen/CalendarScreen';
import HomeSvg from '../svgs/homeSvg';
import colors from '../config/colors';

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={routes.Home}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.primary,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name={routes.Home}
        component={HomeScreen}
        options={{
          tabBarIcon: () => <HomeSvg />,
        }}
      />
      <Tab.Screen name={routes.Calendar} component={CalendarScreen} />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
