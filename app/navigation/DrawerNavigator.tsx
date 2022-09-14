import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, StyleSheet } from 'react-native';
import HeaderBar from '../parts/headerBar';
import colors from '../config/colors';
import HomeNavigator from './HomeNavigator';
import { GoBack } from '../svgs';
import defaultStyles from '../config/styles';

const Drawer = createDrawerNavigator();

const MyProfile = ()  => <Text>My Profile</Text>;
const SignInAndAccountSecurity = ()  => <Text>Sign In and Account Security</Text>;
const PaymentHistory = ()  => <Text>Payment History</Text>;
const LogOut = ()  => <Text>Log Out</Text>;

const DrawerNavigator = () => {  
  return (
    <Drawer.Navigator
      useLegacyImplementation
      initialRouteName='HomeTabs'
      screenOptions={({ navigation }) => ({
        drawerPosition: 'right',
        headerTitle: '',
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerLeft: () => <GoBack style={defaultStyles.ml8} />,
        headerRight: () => <HeaderBar navigation={navigation}/>
      })}
    >
      <Drawer.Screen name="HomeTabs" component={HomeNavigator} />
      <Drawer.Screen name='My Profile' component={MyProfile} />
      <Drawer.Screen
        name='Sign In and Account Security'
        component={SignInAndAccountSecurity}
      />
      <Drawer.Screen name='Payment History' component={PaymentHistory} />
      <Drawer.Screen name='Log Out' component={LogOut} />
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
