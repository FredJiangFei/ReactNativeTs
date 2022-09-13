import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './routes';
import HeaderBar from '../parts/headerBar';
import colors from '../config/colors';
import CalendarScreen from '../screen/CalendarScreen';

const Stack = createNativeStackNavigator();

const CalendarNavigator = () => {
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
      <Stack.Screen name={routes.CalendarScreen} component={CalendarScreen} />
    </Stack.Navigator>
  );
};

export default CalendarNavigator;
