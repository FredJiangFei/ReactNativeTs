import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './routes';
import HeaderBar from '../parts/headerBar';
import colors from '../config/colors';
import OrganizationScreen from '../screens/organization/OrganizationScreen';
import OrganizationDetailsScreen from '../screens/organization/OrganizationDetailsScreen';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native';
import { GoBack } from '../svgs';
import defaultStyles from '../config/styles';

const Stack = createNativeStackNavigator();

const OrganizationNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.OrganizationList}
      screenOptions={({ navigation, route }) => ({
        headerShown: route.name !== routes.OrganizationList,
        headerLeft: () => <GoBack onPress={()=>navigation.goBack()}/>,
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTitleStyle: {
          color: colors.white
        }
      })}
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
