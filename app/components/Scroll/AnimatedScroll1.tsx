import React, { useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
const AnimatedScroll1 = () => {
  const [headerShown, setHeaderShown] = useState(false);

  return (
    <>
      <View
        style={[
          styles.header,
          {
            transform: [{ translateY: headerShown ? 0 : -100 }],
          },
        ]}
      />

      <ScrollView
        onScroll={event => {
          const scrolling = event.nativeEvent.contentOffset.y;
          if (scrolling > 100) {
            setHeaderShown(true);
          } else {
            setHeaderShown(false);
          }
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

export default AnimatedScroll1;
