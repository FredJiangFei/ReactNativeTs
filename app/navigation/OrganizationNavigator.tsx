import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './routes';
import HeaderBar from '../parts/headerBar';
import colors from '../config/colors';
import OrganizationScreen from '../screen/organization/OrganizationScreen';
import OrganizationDetailsScreen from '../screen/organization/OrganizationDetailsScreen';

const Stack = createNativeStackNavigator();

const OrganizationNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.OrganizationList}
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={routes.OrganizationList} component={OrganizationScreen} />
      <Stack.Screen
        name={routes.OrganizationDetails}
        component={OrganizationDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default OrganizationNavigator;
