import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import routes from './routes';
import colors from '../config/colors';
import {
  HomeSvg,
  CalendarSvg,
  AchievementSvg,
  OrganizationSvg,
  TeamSvg,
} from '../svgs';
import OrganizationNavigator from './OrganizationNavigator';
import PostNavigator from './PostNavigator';
import CalendarNavigator from './CalendarNavigator';
import AchievementNavigator from './AchievementNavigator';
import TeamNavigator from './TeamNavigator';

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={routes.Home}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.primary,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name={routes.Home}
        component={PostNavigator}
        options={{
          tabBarIcon: () => <HomeSvg />,
        }}
      />
      <Tab.Screen
        name={routes.Calendar}
        component={CalendarNavigator}
        options={{
          tabBarIcon: () => <CalendarSvg />,
        }}
      />
      <Tab.Screen
        name={routes.Achievement}
        component={AchievementNavigator}
        options={{
          tabBarIcon: () => <AchievementSvg />,
        }}
      />
      <Tab.Screen
        name={routes.Organization}
        component={OrganizationNavigator}
        options={{
          tabBarIcon: () => <OrganizationSvg />,
        }}
      />
      <Tab.Screen
        name={routes.Team}
        component={TeamNavigator}
        options={{
          tabBarIcon: () => <TeamSvg />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
