import React from 'react';
import { View, StyleSheet } from 'react-native';
import ElAnimated from '../components/ElAnimated';
import ElAnimatedEventPan from '../components/ElAnimatedEventPan';
import ElAnimatedEventScrollX from '../components/ElAnimatedEventScrollX';
import ElList from '../components/ElList';
import { useNotifications } from '../hooks/useNotifications';

export default function PostScreen({ navigation }) {
  const { sendNotification, sendLocalNotification, token } = useNotifications({
    navigation,
  });

  return (
    <View style={styles.container}>
 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
