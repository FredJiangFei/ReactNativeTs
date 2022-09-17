import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ElButton } from '../components';
import { useNotifications } from '../hooks/useNotifications';

export default function PostScreen({ navigation }) {
  const noti = useNotifications({ navigation });
  return (
    <View style={styles.container}>
      <Text>Post</Text>
      <ElButton onPress={() => noti.sendLocalNotification()}>
        Send Local Notification
      </ElButton>
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
