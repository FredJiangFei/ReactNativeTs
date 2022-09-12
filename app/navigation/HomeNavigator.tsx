import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import routes from './routes';
import HomeScreen from '../screen/HomeScreen';
import CalendarScreen from '../screen/CalendarScreen';
import colors from '../config/colors';
import { HomeSvg, CalendarSvg, AchievementSvg, OrganizationSvg, TeamSvg } from '../svgs';
import HeaderBar from '../parts/HeaderBar/headerBar';
import AchievementScreen from '../screen/AchievementScreen';
import TeamScreen from '../screen/TeamScreen';
import OrganizationNavigator from './OrganizationNavigator';

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
        component={HomeScreen}
        options={{
          tabBarIcon: () => <HomeSvg />,
        }}
      />
      <Tab.Screen
        name={routes.Calendar}
        component={CalendarScreen}
        options={{
          tabBarIcon: () => <CalendarSvg />,
        }}
      />
      <Tab.Screen
        name={routes.Achievement}
        component={AchievementScreen}
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
        component={TeamScreen}
        options={{
          tabBarIcon: () => <TeamSvg />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
