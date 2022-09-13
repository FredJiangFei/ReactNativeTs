import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './routes';
import HeaderBar from '../parts/headerBar';
import colors from '../config/colors';
import AchievementScreen from '../screen/AchievementScreen';

const Stack = createNativeStackNavigator();

const AchievementNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: '',
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerRight: () => <HeaderBar />,
      }}
    >
      <Stack.Screen name={routes.AchievementList} component={AchievementScreen} />
    </Stack.Navigator>
  );
};

export default AchievementNavigator;
