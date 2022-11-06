import { Box, Button } from 'native-base';
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ElAnimated from '../components/ElAnimated';
import ElAnimatedEventPan from '../components/ElAnimatedEventPan';
import ElAnimatedEventScrollX from '../components/ElAnimatedEventScrollX';
import ElList from '../components/ElList';
import ElPinchImage from '../components/ElPinchImage';
import ElSlider from '../components/ElSlider';
import { useNotifications } from '../hooks/useNotifications';

export default function PostScreen({ navigation }) {
  const { sendNotification, sendLocalNotification, token } = useNotifications({
    navigation,
  });

  const [range, setRange] = useState([0, 3]);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(20);

  return (
    <>
      {/* <Box mt={4}>
        <Text>{range[0]}</Text>
        <Text>{range[1]}</Text>
      </Box>
      <Box mt={4} mx={4}>
        <ElSlider min={min} max={max} value={range} onChange={setRange} />
      </Box>

      <Button onPress={() => setMax(100)}>Change</Button> */}
      <ElPinchImage />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
