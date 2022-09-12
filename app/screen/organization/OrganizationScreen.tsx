import React from 'react';
import { Button, Text } from 'react-native';
import routes from '../../navigation/routes';

export default function OrganizationScreen({ navigation }) {
  return (
    <>
      <Text>Organization</Text>
      <Button
        title='Go details'
        onPress={() => navigation.navigate(routes.OrganizationDetails)}
      />
    </>
  );
}
