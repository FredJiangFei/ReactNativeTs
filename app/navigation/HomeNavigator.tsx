import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import routes from './routes';
import HomeScreen from '../screen/HomeScreen';
import CalendarScreen from '../screen/CalendarScreen';
import colors from '../config/colors';
import { HomeSvg } from '../svgs';
import HeaderBar from '../parts/HeaderBar/headerBar';

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={routes.Home}
      screenOptions={{
        headerTitle: '',
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerRight: () => <HeaderBar />,
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
