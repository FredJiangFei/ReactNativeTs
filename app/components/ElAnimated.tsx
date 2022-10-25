import React, { useRef, useEffect } from 'react';
import { Animated, View, StyleSheet } from 'react-native';

const SIZE = 100;

const ElAnimated = () => {
  const progress = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
        Animated.parallel([
          Animated.sequence([
            Animated.timing(progress, { toValue: 1, duration: 2500, useNativeDriver: true }),
            Animated.timing(progress, { toValue: 0, duration: 2500, useNativeDriver: true }),
          ]),
          Animated.sequence([
            Animated.timing(scale, { toValue: 2, duration: 2500, useNativeDriver: true }),
            Animated.timing(scale, { toValue: 1, duration: 2500, useNativeDriver: true }),
          ]),
        ]),
        { iterations: 3 }
      ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.square,
          {
            borderRadius: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [(0 * SIZE) / 2, (1 * SIZE) / 2],
            }),
            opacity: progress,
            transform: [{ scale }],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    width: SIZE,
    height: SIZE,
    backgroundColor: 'blue',
  },
});

export default ElAnimated;