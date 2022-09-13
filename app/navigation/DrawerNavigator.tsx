import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, View } from 'react-native';
import HeaderBar from '../parts/headerBar';
import colors from '../config/colors';
import HomeNavigator from './HomeNavigator';

const Drawer = createDrawerNavigator();

function MyProfile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>My Profile</Text>
    </View>
  );
}

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
        headerLeft: () => '',
        headerRight: () => <HeaderBar navigation={navigation}/>
      })}
    >
      <Drawer.Screen name="HomeTabs" component={HomeNavigator} />
      <Drawer.Screen name='My Profile' component={MyProfile} />
      <Drawer.Screen
        name='Sign In and Account Security'
        component={MyProfile}
      />
      <Drawer.Screen name='Payment History' component={MyProfile} />
      <Drawer.Screen name='Log Out' component={MyProfile} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
