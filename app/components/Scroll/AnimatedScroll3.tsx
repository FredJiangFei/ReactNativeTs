import React, { useRef } from 'react';
import { ScrollView, View, StyleSheet, Animated } from 'react-native';
const AnimatedScroll3 = () => {
  const scrolling = useRef(new Animated.Value(0)).current;
  const translation = scrolling.interpolate({
    inputRange: [100, 130],
    outputRange: [-100, 0],
    extrapolate: 'clamp',
  });

  return (
    <>
      <Animated.View
        style={[
          styles.header,
          {
            transform: [{ translateY: translation }],
          },
        ]}
      />

      <ScrollView
        onScroll={event => {
          scrolling.setValue(event.nativeEvent.contentOffset.y);
        }}
        scrollEventThrottle={16}
        style={{ flex: 1 }}
      >
        <View style={{ flex: 1, height: 1000 }} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: 'tomato',
  },
});

export default AnimatedScroll3;
