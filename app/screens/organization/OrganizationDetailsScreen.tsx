import React, { useLayoutEffect } from 'react';
import { Text } from 'react-native';

export default function OrganizationDetailsScreen({ navigation, route }) {
  useLayoutEffect(() => {
    if (!navigation || !route) return

    const parent = navigation.getParent()
    if (parent) {
      parent.setOptions({
        headerShown: false,
      })
    }

    return parent
      ? () => {
          parent.setOptions({
            headerShown: true,
          })
        }
      : undefined
  }, [navigation, route])

  return <Text>Organization Details</Text>;
}
