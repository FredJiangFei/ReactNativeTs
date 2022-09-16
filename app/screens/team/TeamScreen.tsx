import React from 'react';
import { Button, Text } from 'react-native';
import routes from '../../navigation/routes';

export default function TeamScreen({ navigation }) {
  return (
    <>
      <Text>Team</Text>
      <Button
        title='create team'
        onPress={() => navigation.navigate(routes.CreateTeam)}
      />
    </>
  );
}
