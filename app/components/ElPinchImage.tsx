import { Box } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import {
  PinchGestureHandler,
  PinchGestureHandlerStateChangeEvent,
  RotationGestureHandler,
  RotationGestureHandlerStateChangeEvent,
  State,
} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

const USE_NATIVE_DRIVER = true;

export default function ElPinchImage() {
  const imagePinch = React.createRef();
  const imageRotation = React.createRef();
  let lastRotate = 0;
  let lastScale = 1;
  const rotate = new Animated.Value(0);
  const pinchScale = new Animated.Value(1);
  const baseScale = new Animated.Value(1);
  const scale = Animated.multiply(baseScale, pinchScale);
  const rotateStr = rotate.interpolate({
    inputRange: [-100, 100],
    outputRange: ['-100rad', '100rad'],
  });

  const tilt = new Animated.Value(0);
  const tiltStr = tilt.interpolate({
    inputRange: [-501, -500, 0, 1],
    outputRange: ['1rad', '1rad', '0rad', '0rad'],
  });

  const onRotateGestureEvent = Animated.event(
    [{ nativeEvent: { rotation: rotate } }],
    { useNativeDriver: USE_NATIVE_DRIVER },
  );

  const onPinchGestureEvent = Animated.event(
    [{ nativeEvent: { scale: pinchScale } }],
    { useNativeDriver: USE_NATIVE_DRIVER },
  );

  const onRotateHandlerStateChange = (
    event: RotationGestureHandlerStateChangeEvent,
  ) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      lastRotate += event.nativeEvent.rotation;
      rotate.setOffset(lastRotate);
      rotate.setValue(0);
    }
  };

  const onPinchHandlerStateChange = (
    event: PinchGestureHandlerStateChangeEvent,
  ) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      lastScale *= event.nativeEvent.scale;
      baseScale.setValue(lastScale);
      pinchScale.setValue(1);
    }
  };

  return (
    <>
      <Box>123</Box>
      <Animated.Image source={require('./mario-av.png')} />
      <RotationGestureHandler
        ref={imageRotation}
        simultaneousHandlers={imagePinch}
        onGestureEvent={onRotateGestureEvent}
        onHandlerStateChange={onRotateHandlerStateChange}
      >
        <Animated.View>
          <PinchGestureHandler
            ref={imagePinch}
            simultaneousHandlers={imageRotation}
            onGestureEvent={onPinchGestureEvent}
            onHandlerStateChange={onPinchHandlerStateChange}
          >
            <Animated.View style={styles.container} collapsable={false}>
              <Animated.Image
                style={[
                  styles.pinchableImage,
                  {
                    transform: [
                      { perspective: 200 },
                      { scale: scale },
                      { rotate: rotateStr },
                      { rotateX: tiltStr },
                    ],
                  },
                ]}
                source={require('./mario-av.png')}
              />
            </Animated.View>
          </PinchGestureHandler>
        </Animated.View>
      </RotationGestureHandler>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    overflow: 'hidden',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  pinchableImage: {
    width: 250,
    height: 250,
  },
  wrapper: {
    flex: 1,
  },
});
