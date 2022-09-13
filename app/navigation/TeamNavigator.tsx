import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './routes';
import HeaderBar from '../parts/headerBar';
import colors from '../config/colors';
import TeamScreen from '../screen/TeamScreen';

const Stack = createNativeStackNavigator();

const TeamNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={routes.TeamList} component={TeamScreen} />
    </Stack.Navigator>
  );
};

export default TeamNavigator;
