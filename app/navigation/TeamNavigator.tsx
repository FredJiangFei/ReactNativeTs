import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './routes';
import TeamScreen from '../screens/team/TeamScreen';
import CreateTeamScreen from '../screens/team/CreateTeamScreen';

const Stack = createNativeStackNavigator();

const TeamNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={routes.TeamList} component={TeamScreen} />
      <Stack.Screen name={routes.CreateTeam} component={CreateTeamScreen} />
    </Stack.Navigator>
  );
};

export default TeamNavigator;
