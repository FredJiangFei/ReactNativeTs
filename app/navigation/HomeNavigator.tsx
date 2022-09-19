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
import HeaderBar from '../parts/headerBar';

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={routes.Home}
      screenOptions={({ navigation, route }) => ({
        tabBarStyle: {
          backgroundColor: colors.primary,
        },
        tabBarShowLabel: false,
        headerTitle: '',
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerRight: () => <HeaderBar navigation={navigation} />,
      })}
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
