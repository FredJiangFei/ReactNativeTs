import { Box } from 'native-base';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ElAnimated from '../components/ElAnimated';
import ElAnimatedEventPan from '../components/ElAnimatedEventPan';
import ElAnimatedEventScrollX from '../components/ElAnimatedEventScrollX';
import ElList from '../components/ElList';
import ElSlider from '../components/ElSlider';
import { useNotifications } from '../hooks/useNotifications';

export default function PostScreen({ navigation }) {
  const { sendNotification, sendLocalNotification, token } = useNotifications({
    navigation,
  });

  const [range, setRange] = useState([0, 3]);

  return (
    <Box mt={4}>
      <ElSlider min={0} max={20} value={range} onChange={setRange} />
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
