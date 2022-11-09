import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Box, Flex, Text } from 'native-base';
import colors from 'el/config/colors';
import Animated, {
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

const thumbRadius = 15;

const Thumb = ({ min, max, value, onChange, containerWidth }) => {
  const position = useSharedValue({ x: 0 });
  const start = useSharedValue({ x: 0 });

  const maxValue = useRef<number>(max);
  const minValue = useRef<number>(min);
  const [tempValue, setTempValue] = useState<any>(value);

  useEffect(() => {
    initPosition();
  }, [containerWidth, max]);

  const initPosition = () => {
    if (!max) return 0;

    position.value = {
      x: (containerWidth / max) * value,
    };
  };

  const getValueByPosition = (pos: any) =>
    Math.round((maxValue.current / containerWidth) * pos);

  useEffect(() => {
    maxValue.current = max;
  }, [max]);

  useEffect(() => {
    minValue.current = min;
  }, [min]);

  const updateTempValueWhenPan = () => {
    setTempValue(getValueByPosition(position.value.x));
  };

  const updateValueAfterPanEnd = () => {
    onChange(getValueByPosition(position.value.x));
  };

  const gesture = Gesture.Pan()
    .onUpdate(e => {
      let thumbPosition = e.translationX + start.value.x;
      if (thumbPosition < 0) thumbPosition = 0;
      if (thumbPosition > containerWidth) thumbPosition = containerWidth;
      position.value = {
        x: thumbPosition,
      };
      runOnJS(updateTempValueWhenPan)();
    })
    .onEnd(() => {
      start.value = {
        x: position.value.x,
      };
      runOnJS(updateValueAfterPanEnd)();
    });

  const animatedStyles = useAnimatedStyle(() => {
    const translateX = interpolate(
      position.value.x,
      [0, containerWidth],
      [0, containerWidth],
      {
        extrapolateLeft: Extrapolation.CLAMP,
        extrapolateRight: Extrapolation.CLAMP,
      },
    );

    return {
      transform: [{ translateX: translateX - thumbRadius }],
    };
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.thumb, animatedStyles]}>
        <Flex bottom={6} w={8} alignItems='center'>
          {tempValue}
        </Flex>
      </Animated.View>
    </GestureDetector>
  );
};

export default function ElSlider({ min, max, value, onChange, ...rest }) {
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const thumb1 = useRef<number>(value[0]);
  const thumb2 = useRef<number>(value[1]);

  const onLayout = event => {
    const { width } = event.nativeEvent.layout;
    setContainerWidth(width);
  };

  const handleThumb1Change = newValue => {
    thumb1.current = newValue;
    emitNewValues(newValue, thumb2.current);
  };

  const handleThumb2Change = newValue => {
    thumb2.current = newValue;
    emitNewValues(newValue, thumb1.current);
  };

  const emitNewValues = (value1, value2) => {
    const newValues = value1 > value2 ? [value2, value1] : [value1, value2];
    onChange(newValues);
  };

  return (
    <Box {...rest}>
      <Flex onLayout={onLayout} h={8} justify='center'>
        <Flex h={StyleSheet.hairlineWidth} bgColor={colors.primary}></Flex>
        <Thumb
          min={min}
          max={max}
          value={thumb1.current}
          onChange={handleThumb1Change}
          containerWidth={containerWidth}
        />
        <Thumb
          min={min}
          max={max}
          value={thumb2.current}
          onChange={handleThumb2Change}
          containerWidth={containerWidth}
        />
      </Flex>
      <Flex direction='row' justify='space-between'>
        <Text>{min}</Text>
        <Text>{max}</Text>
      </Flex>
    </Box>
  );
}

const styles = StyleSheet.create({
  chevronDown: {
    position: 'absolute',
    top: '40%',
    right: 10,
  },
  thumb: {
    position: 'absolute',
    top: 0,
    height: thumbRadius * 2,
    width: thumbRadius * 2,
    borderWidth: 4,
    borderRadius: thumbRadius,
    backgroundColor: 'white',
    borderColor: colors.secondary,
    display: 'flex',
    alignItems: 'center',
  },
});
