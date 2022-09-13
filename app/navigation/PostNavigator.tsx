import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './routes';
import HeaderBar from '../parts/headerBar';
import colors from '../config/colors';
import PostScreen from '../screens/PostScreen';

const Stack = createNativeStackNavigator();

const PostNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.Post}
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={routes.Post} component={PostScreen} />
    </Stack.Navigator>
  );
};

export default PostNavigator;
