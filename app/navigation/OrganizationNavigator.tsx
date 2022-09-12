import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './routes';
import OrganizationScreen from '../screen/organization/OrganizationScreen';
import OrganizationDetailsScreen from '../screen/organization/OrganizationDetailsScreen';
import HeaderBar from '../parts/HeaderBar/headerBar';
import colors from '../config/colors';

const Stack = createNativeStackNavigator();

const OrganizationNavigator = () => {
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
      <Stack.Screen name={routes.Organization} component={OrganizationScreen} />
      <Stack.Screen
        name={routes.OrganizationDetails}
        component={OrganizationDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default OrganizationNavigator;
