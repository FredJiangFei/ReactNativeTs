import React, { useRef } from 'react';
import { Animated, View, StyleSheet, PanResponder } from 'react-native';

const ElAnimatedEventPan = () => {
  const pan = useRef<any>(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        console.log({ ...pan.x }, 'setOffset Before');
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
        console.log({ ...pan.x }, 'setOffset After');
      },
      // onPanResponderMove: (_, gesture) => {
      //   pan.x.setValue(gesture.dx);
      //   pan.y.setValue(gesture.dy);
      // },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        console.log({ ...pan.x }, 'flattenOffset Before');
        pan.flattenOffset();
        console.log({ ...pan.x }, 'flattenOffset After');
      },
    }),
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.ball, pan.getLayout()]}
        {...panResponder.panHandlers}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ball: {
    backgroundColor: 'blue',
    height: 100,
    width: 100,
    borderRadius: 50,
  },
});

export default ElAnimatedEventPan;
