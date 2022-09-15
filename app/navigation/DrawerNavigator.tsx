import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { Text, StyleSheet } from 'react-native';
import HeaderBar from '../parts/headerBar';
import colors from '../config/colors';
import HomeNavigator from './HomeNavigator';
import { GoBack } from '../svgs';
import defaultStyles from '../config/styles';
import { useAuth } from '../hooks/useAuth';
import routes from './routes';
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const MyProfile = () => <Text>My Profile</Text>;
const SignInAndAccountSecurity = () => (
  <Text>Sign In and Account Security</Text>
);
const PaymentHistory = () => <Text>Payment History</Text>;

function CustomDrawerContent({ navigation }) {
  const { logOut } = useAuth();
  return (
    <DrawerContentScrollView>
      <DrawerItem
        label='My Profile'
        onPress={() => navigation.navigate('My Profile')}
      />
      <DrawerItem
        label='Sign In and Account Security'
        onPress={() => navigation.navigate('Sign In and Account Security')}
      />
      <DrawerItem
        label='Payment History'
        onPress={() => navigation.navigate('Payment History')}
      />
      <DrawerItem label='Log Out' onPress={() => logOut()} />
    </DrawerContentScrollView>
  );
}

const DrawerNavigator = () => {
  const nav = useNavigation();
  const getHeaderLeft = () => {
    return <GoBack style={defaultStyles.ml8} onPress={() => nav.goBack()} />;
  };

  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={props => <CustomDrawerContent {...props} />}
      initialRouteName={routes.Home}
      screenOptions={({ route }) => ({
        drawerPosition: 'right',
        headerShown: route.name !== routes.Home,
        headerLeft: () => getHeaderLeft()
      })}
    >
      <Drawer.Screen name={routes.Home} component={HomeNavigator} />
      <Drawer.Screen name='My Profile' component={MyProfile} />
      <Drawer.Screen
        name='Sign In and Account Security'
        component={SignInAndAccountSecurity}
      />
      <Drawer.Screen name='Payment History' component={PaymentHistory} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DrawerNavigator;
