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
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

const MyProfile = () => <Text>My Profile</Text>;
const AccountSecurity = () => (
  <Text>Account Security</Text>
);
const PaymentHistory = () => <Text>Payment History</Text>;
const Message = () => <Text>Message</Text>;

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
        onPress={() => navigation.navigate('Account Security')}
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
  const getHeaderLeft = (route) => {
    return <TouchableWithoutFeedback onPress={() => nav.goBack()}> 
      <GoBack style={defaultStyles.ml8} />
    </TouchableWithoutFeedback>;
  };

  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={props => <CustomDrawerContent {...props} />}
      initialRouteName={routes.HomeNavigator}
      screenOptions={({ route }) => ({
        drawerPosition: 'right',
        headerShown: route.name !== routes.HomeNavigator,
        headerLeft: () => getHeaderLeft(route),
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTitleStyle: {
          color: colors.white
        }
      })}
    >
      <Drawer.Screen name={routes.HomeNavigator} component={HomeNavigator} />
      <Drawer.Screen name='My Profile' component={MyProfile}/>
      <Drawer.Screen name='Account Security' component={AccountSecurity}/>
      <Drawer.Screen name='Payment History' component={PaymentHistory} />
      <Drawer.Screen name='Message' component={Message} />
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
